from flask import Blueprint, jsonify, request
from backend.models import User, db
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
import os
import json


user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}



@user_routes.route('/', methods=['POST'])
def sign_up():
  data = request.json

  hashed_pass = generate_password_hash(data['password'], method='sha256')
  new_user = User(username=data['username'], email=data['email'], hashed_password=hashed_pass)
  db.session.add(new_user)
  db.session.commit()
  token_user = new_user.to_dict()

  token = jwt.encode({
            "userId": token_user["id"],
            "exp": datetime.utcnow() + timedelta(minutes=30)
            }, os.environ.get('SECRET_KEY'))

  delattr(new_user, 'hashed_password')

  user = new_user.to_dict()
  user.pop('hashed_password')

  return {'access_token': token.decode('UTF-8'), **user}


@user_routes.route('/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.filter_by(id=id).first()
    if not user:
        return jsonify({'message': 'Not user found!'})
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User has been deleted!'})