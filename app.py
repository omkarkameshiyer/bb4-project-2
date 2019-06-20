import os
import datetime
import pandas as pd
import numpy as np

import csv
import tablib

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, Integer, String, func

from flask import (Flask, jsonify, render_template, Response, request,redirect)
from flask_sqlalchemy import SQLAlchemy
import csv  
import json  


def to_json(row):
    try:
        return json.loads(row)
    except:
        return {}


app = Flask(__name__, static_url_path='/static')
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://bbbaxhpiaojdbv:07b607300e23255417213ff951bedd111995a6c10e4bcceea0ae07a6499e2afc@ec2-50-19-254-63.compute-1.amazonaws.com:5432/dfv685d0cppek8"
db = SQLAlchemy(app)
Base = declarative_base()

class Survey(db.Model):
    __tablename__ = 'survey'

    id = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String(64))
    age = db.Column(db.Integer)
    question1 = db.Column(db.String(64))
    question2 = db.Column(db.String(64))
    
    
    def __init__(self, name, age, question1, question2):
        self.name = name
        self.age = age
        self.question1 = question1
        self.question2 = question2
        
    def __repr__(self):
        return '<Survey %r>' % (self.name)
    


##################################################
## Database Setup
##################################################
engine = create_engine("postgres://bbbaxhpiaojdbv:07b607300e23255417213ff951bedd111995a6c10e4bcceea0ae07a6499e2afc@ec2-50-19-254-63.compute-1.amazonaws.com:5432/dfv685d0cppek8",pool_recycle=1)
#

# Create our session (link) from Python to the DB
session = Session(engine)


# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)



# Save reference to the table





@app.before_first_request
def setup():
    # Recreate database each time for demo
    #db.drop_all()
    db.create_all()
    #db.session.add(Survey("HuyTest",38,"Yes","Yes"))
   # db.session.commit()


@app.route("/")
def index():
    """Return the homepage."""
    return app.send_static_file('index.html')

@app.route("/MarkerClusters")
def MarkerClusters():
   """Marker Clusters"""
   return render_template("MarkerClusters.html")

@app.route('/csvtable')
def getCsvAsATable():
    dataset = tablib.Dataset()
    with open('./db/schoolShootingData_withGeoCoordinates.csv', 'r', encoding="utf8") as file:
        data = file.read()
    dataset.csv =data
    return dataset.html


@app.route('/csvshootingdata')
def getCsv():
    with open('./db/schoolShootingData_withGeoCoordinates.csv', 'r', encoding="utf8") as file:
        data = file.read() + '\n'
    return (repr(data))  



@app.route('/jsonShootingData')
def getShooting():
   data_file = './db/schoolShootingData_withGeoCoordinates.csv'
   data_file_pd = pd.read_csv(data_file, encoding='utf8')
   df = pd.DataFrame(data_file_pd)
   df["location"] = df["location"].map(lambda l: to_json(l.replace("'", '"')))
   df.fillna('NaN',inplace=True)

   return jsonify(df.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)
