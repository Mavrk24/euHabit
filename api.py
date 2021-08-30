from flask import Flask,request, session
from flask_cors import CORS
from bayes  import BayesClf, PredictBC
import numpy as np
import json


app = Flask(__name__)
CORS(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
screen_route = str (hash("screening"))

@app.route("/username", methods=['POST'])
def login():
    username = request.get_json()
    # username = request.form.get("username", "") or request.form["username"]
    session["username"]=username
    return {'user': username} # from flask import jsonify 

@app.route("/api")
def api():
    k = session.get("username") 
    #m = 'eu' + k['username']
    return {'username': PredictBC(int(k['username']),int(k['symptoms']))[-1]}

@app.route("/subentry" , methods=['POST'])
def sub():
    entry = request.get_json()
    return entry 

@app.route("/request")
def getreq():
    key = [1,[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],0] #sample_data
    return {'r_key': key }
