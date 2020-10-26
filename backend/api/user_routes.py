from flask import Blueprint, jsonify, request
from backend.models import User, db
from werkzeug.security import generate_password_hash, check_password_hash

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}

@user_routes.route('/', methods=['POST'])
def sign_up():
  data = request.get_json()

  hashed_pass = generate_password_hash(data['password'], method='sha256')
  new_user = User(username=data['username'], email=data['email'], hashed_password=hashed_pass)
  db.session.add(new_user)
  db.session.commit()

  return jsonify({'message': 'New user created!'})

