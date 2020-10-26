from flask import Blueprint, jsonify, request, make_response
from backend.models import User
import jwt
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os
from functools import wraps


session_routes = Blueprint('session', __name__)

@session_routes.route("/")
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message' : 'Token is missing!'}), 401

        try: 
            data = jwt.decode(token, os.environ.get('SECRET_KEY'))
            current_user = User.query.filter_by(id=data['userId']).first()
        except:
            return jsonify({'message' : 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@session_routes.route("/login", methods=["GET", "POST"])
@token_required
def login(current_user):
    data = request.get_json()


    if not data or not data['email'] or not data['password']:
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
        
        resp = make_response('Setting cookie')
        resp.set_cookie('x-access-token', token.decode('UTF-8'))

        # response = jwt.decode(token, os.environ.get('SECRET_KEY'))
        # print(response['userId'])
        # print("******")
        # current_user = User.query.filter_by(id=response['userId']).first()
        # value = current_user.to_dict()
        # value.pop('hashed_password')

        # return {**value}

    return jsonify({'message': 'incomplete'})


@session_routes.route("/logout")
def logout():
    resp = make_response("del success")
    resp.delete_cookie("token")
    return resp

