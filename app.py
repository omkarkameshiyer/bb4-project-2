import os

import pandas as pd
import numpy as np
import tablib
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, Response
from flask_sqlalchemy import SQLAlchemy
import csv  
import json  

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

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
   return jsonify(df.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)
