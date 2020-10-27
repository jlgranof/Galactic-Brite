from flask import Blueprint, jsonify, request, make_response
from backend.models import User
import jwt
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os



session_routes = Blueprint('session', __name__)

@session_routes.route("/")
def restoreUser():
    token = request.cookies.get('access_token')

    if not token:
        return {}

    response = jwt.decode(token, os.environ.get('SECRET_KEY'))
    
    current_user = User.query.filter_by(id=response['userId']).first()
    value = current_user.to_dict()
    value.pop('hashed_password')

    return {**value}

@session_routes.route("/login", methods=["GET", "POST"])
def login():
    data = request.get_json()

    if not data:
        return jsonify({'message': 'No login information provided'})

    response = User.query.filter_by(email=data["email"]).first()

    user = response.to_dict()

    if not user:
        return jsonify({'message': 'No user found!'})


    if check_password_hash(user['hashed_password'], data['password']):
        token = jwt.encode({
            "userId": user["id"],
            "exp": datetime.utcnow() + timedelta(minutes=30)
            }, os.environ.get('SECRET_KEY'))
        

        response = jwt.decode(token, os.environ.get('SECRET_KEY'))
        print(response['userId'])
        print("******")
        current_user = User.query.filter_by(id=response['userId']).first()
        user = current_user.to_dict()
        user.pop('hashed_password')

        return {'access_token': token.decode('UTF-8'), "user":user}

    return jsonify({'message': 'incomplete'})


@session_routes.route("/logout")
def logout():
    # token = request.cookies.get('access_token')
    res = make_response("Cookie Removed")   
    res.delete_cookie("access_token") 
    # res.set_cookie('foo', 'bar', max_age=0)    
    return res

