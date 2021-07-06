from flask import Flask,request, session
from flask_cors import CORS
from bayes  import BayesClf, PredictBC
app = Flask(__name__)
CORS(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

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