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

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route('/getcsvtable')
def getCsvAsATable():
    dataset = tablib.Dataset()
    with open('./db/schoolShootingData_withGeoCoordinates.csv', 'r', encoding="utf8") as file:
    	data = file.read()
    dataset.csv =data
    return dataset.html

@app.route('/getcsvdatafile')
def getCsv():
    with open('./db/schoolShootingData_withGeoCoordinates.csv', 'r', encoding="utf8") as file:
    	data = file.read() + '\n'
    return (repr(data))	

if __name__ == "__main__":
    app.run(debug=True)
