import os

import pandas as pd
import numpy as np

import csv

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

@app.route('/jsonShootingData')
def getShooting():
    data_file = './db/schoolShootingData_withGeoCoordinates.csv'
    data_file_pd = pd.read_csv(data_file, encoding='utf8')
    df = pd.DataFrame(data_file_pd)

    return jsonify(df.to_dict(orient="records"))


if __name__ == "__main__":
    app.run(debug=True)
