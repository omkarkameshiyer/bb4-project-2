import os
from datetime import datetime, date
import pandas as pd
import numpy as np

import csv
import json  

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.pool import StaticPool
from sqlalchemy import create_engine, Column, Integer, String, func

from flask import (Flask, jsonify, render_template, Response, request,redirect)
from flask_sqlalchemy import SQLAlchemy


##################################################
## Flask and sqlalchemy Setup
##################################################
app = Flask(__name__, static_url_path='/static')
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/db.sqlite"
db = SQLAlchemy(app)
Base = declarative_base()

class Survey(db.Model):
    __tablename__ = 'survey'

    id = db.Column(db.Integer, primary_key=True) #BigInteger()
    name = db.Column(db.String(64))
    age = db.Column(db.Integer)
    sex = db.Column(db.String(64))
    question1 = db.Column(db.String(64))
    question2 = db.Column(db.String(64))
    timestamp = db.Column(db.String, nullable= False)          #= 
   
    def __init__(self, name, age,sex, question1, question2, timestamp):
        self.name = name
        self.age = age
        self.sex = sex
        self.question1 = question1
        self.question2 = question2
        self.timestamp = timestamp
        
    def __repr__(self):
        return '<Survey %r>' % (self.name)
    
@app.before_first_request
def setup():
    # Recreate database each time for demo
    #db.drop_all()
    db.create_all()
    # db.session.add(Survey(1,"HuyTest",38,"Yes","Yes"))
    # db.session.commit()


##################################################
## Database Setup
##################################################
engine = create_engine("sqlite:///db/db.sqlite",  connect_args={'check_same_thread':False},
                    poolclass=StaticPool)  #pool_recycle=1
#

# Create our session (link) from Python to the DB
session = Session(engine)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)







##################################################
## Main Homepage
##################################################
@app.route("/")
def index():
    """Return the homepage."""
    return render_template('index.html')

##################################################
@app.route("/timeSeries")
def timeSeries():
    """timeSeries map and chart."""
    return render_template('timeSeries.html')
##################################################
@app.route("/Choropleth")
def Choropleth():
   """Choropleth"""
   return render_template("Choropleth.html")
##################################################
@app.route("/MarkerClusters")
def MarkerClusters():
   """Marker Clusters"""
   return render_template("MarkerClusters.html") 


##################################################
## Huy's : /send, /votedata, /plotdata
##################################################
@app.route("/send", methods=["GET", "POST"])
def send():

    if request.method == "POST":
        name = request.form["name"]
        age = request.form["age"]
        sex = request.form["sex"]
        question1 = request.form["question1"]
        question2 = request.form["question2"]
        
        nowTime = datetime.now().strftime("%F")
        print(nowTime)

        voter = Survey(name=name, age=int(age), sex=sex, question1=question1,question2=question2,timestamp=nowTime) 
        db.session.add(voter)
        db.session.commit()

        return redirect("/send", code=302)

    return render_template("survey.html")


@app.route("/votedata")
def list_voter():
    """Return a list of voting data including the name, age, response of each vote"""

    # Save reference to the table
    Voters = Base.classes.survey
    # Query all passengers
    results = session.query(Voters.name, Voters.age, Voters.sex, Voters.question1, Voters.question2, Voters.timestamp).all()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_voters = []
    for name, age, sex, question1, question2, timestamp in results:
        voters_dict = {}
        voters_dict["name"] = name
        voters_dict["age"] = age
        voters_dict["sex"] = sex
        voters_dict["question1"] = question1
        voters_dict["question2"] = question2
        voters_dict["timestamp"] = timestamp
        all_voters.append(voters_dict)

    return jsonify(all_voters)


# create route that returns data for plotting
@app.route("/plotdata")
def bar():
    
    all_Plots = []

    #Plot data for Question 1
    results = db.session.query(Survey.question1, func.count(Survey.question1)).group_by(Survey.question1).all()

    

    result_1 = [result[0] for result in results]
    count_1 = [result[1] for result in results]

    plot_question1 = {
        "x": result_1,
        "y": count_1,
        "type": "bar"
    }
    

    all_Plots.append(plot_question1)


    #Plot data for question #2
    results = db.session.query(Survey.question2, func.count(Survey.question1)).group_by(Survey.question2).all()

    result_1 = [result[0] for result in results]
    count_1 = [result[1] for result in results]

    plot_question2 = {
        "x": result_1,
        "y": count_1,
        "type": "bar"
    }

    all_Plots.append(plot_question2)






    return jsonify(all_Plots)


##################################################
## Soyoung and Elise's : /jsonShootingData
##################################################
def to_json(row):
    try:
        return json.loads(row)
    except:
        return {}

@app.route('/jsonShootingData')
def getShooting():
    data_file = './db/schoolShootingData_withGeoCoordinates.csv'
    data_file_pd = pd.read_csv(data_file, encoding='utf8')
    df = pd.DataFrame(data_file_pd)

    # fill empty values(NaN) to prevent SyntaxError in browser
    df.fillna('NaN',inplace=True)
    df["location"] = df["location"].map(lambda l: to_json(l.replace("'", '"')))
   
    return jsonify(df.to_dict(orient="records"))


##################################################
## Elise's : /geoJsonShootingData
##################################################
@app.route('/geoJsonShootingData')
def getGeoShooting():
    data_file = './db/schoolShootingData_withGeoCoordinates.csv'
    data_file_pd = pd.read_csv(data_file, encoding='utf8')
    df = pd.DataFrame(data_file_pd)
    df["location"] = df["location"].map(lambda l: to_json(l.replace("'", '"')))
    df.fillna('NaN',inplace=True)
    shooting_dict = df.to_dict(orient="records")

    count = dict()
    for item in shooting_dict:
        if(item['State'] not in count):
            count[item['State']] = 0
        count[item['State']] += 1
    print(count)
    with open('./db/us-states.json') as json_file:
        geo_data = json.load(json_file)
        for item in geo_data['features']:
            if item['properties']['name'] in count:
                item['properties']['count'] = count[item['properties']['name']]
        return jsonify(geo_data)


if __name__ == "__main__":
    app.run(debug=True)