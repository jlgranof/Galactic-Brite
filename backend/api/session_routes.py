from flask import Blueprint, jsonify, request, make_response
from backend.models import User
import jwt
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies
)


session_routes = Blueprint('session', __name__)

# Same thing as login here, except we are only setting a new cookie
# for the access token.
@session_routes.route('/token/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    # Create the new access token
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)

    response = User.query.filter_by(username=current_user).first()
    # Set the JWT access cookie in the response
    user = response.to_dict()
    user.pop('hashed_password')
    resp = jsonify({'refresh': True, **user})
    set_access_cookies(resp, access_token)
    return resp, 200

@session_routes.route('/token/auth', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if not username or not password:
        return jsonify({'login': False}), 401
    response = User.query.filter_by(username=username).first()
    user = response.to_dict()
    if not user:
        return jsonify({'message': 'No user found!'})
    if check_password_hash(user['hashed_password'], password):
        # Create the tokens we will be sending back to the user
        access_token = create_access_token(identity=username)
        refresh_token = create_refresh_token(identity=username)
        user.pop('hashed_password')
        # Set the JWT cookies in the response
        resp = jsonify({'login': True, **user})
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)
        return resp, 200
    return jsonify({"message": "failed"})

# Because the JWTs are stored in an httponly cookie now, we cannot
# log the user out by simply deleting the cookie in the frontend.
# We need the backend to send us a response to delete the cookies
# in order to logout. unset_jwt_cookies is a helper function to
# do just that.
@session_routes.route('/token/remove', methods=['POST'])
def logout():
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp, 200
