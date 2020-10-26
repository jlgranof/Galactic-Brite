from flask import Blueprint, jsonify, request,make_response
from backend.models import User
import jwt
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os
session_routes = Blueprint('session', __name__)

@session_routes.route("/")
def restoreUser():
    token = request.cookies.get("session", False)
    decoded = jwt.decode(token, algorithm="sha256")
    print(decoded)
    if(token):
        return jsonify({"token": decoded})
    return {}


@session_routes.route("/login", methods=["GET", "POST"])
def login():
    data = request.get_json()


    if not data or not data['email'] or not data['password']:
        return jsonify({'message': 'No login information provided'})

    response = User.query.filter_by(email=data["email"]).first()
    print("="*20)
    user = response.to_dict()
    print("="*20)
    print(user)
    if not user:
        return jsonify({'message': 'No user found!'})


    if check_password_hash(user['hashed_password'], data['password']):
        token = jwt.encode({
            "userId": user["id"],
            "exp": datetime.utcnow() + timedelta(minutes=30)
            }, os.environ.get('SECRET_KEY'))

        # # token = jwt.encode(
        # #     payload, 
        # #     secret, 
        # #     algorithm=algorithm, 
        # #     headers=headers
        # #     )
            

        return jsonify({'token': token.decode('UTF-8')})

    return jsonify({'message': 'final return'})


@session_routes.route("/logout")
def logout():
    resp = make_response("del success")
    resp.delete_cookie("session")
    return resp


# @app.route('/delete-cookie/')
# def delete_cookie():
#     res = make_response("Cookie Removed")
#     res.set_cookie('foo', 'bar', max_age=0)
#     return res

# router.delete('/', asyncHandler(async (req, res)= > {
#     res.clearCookie('token')
#     res.json({message: 'success'})
# }))
