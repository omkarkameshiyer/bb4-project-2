import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route('/getcsvdatafile')
def getCsv():
    with open('schoolShootingData_withGeoCoordinates.csv', 'r') as file:
    	data = file.read() + '\n'
    return (repr(data))	

if __name__ == "__main__":
    app.run()
