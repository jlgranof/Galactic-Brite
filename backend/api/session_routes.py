from flask import Blueprint, jsonify
from backend.models import User

session_routes = Blueprint('session', __name__)

@session_routes.route("/", methods=["GET", "POST"])
def login():
    pass

@session_routes.route('/', methods=['DELETE'])
def logout():
  pass