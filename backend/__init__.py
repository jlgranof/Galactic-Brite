import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate

from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies
)


from backend.models import db, User
from backend.api.user_routes import user_routes
from backend.api.event_routes import event_routes
from backend.api.session_routes import session_routes

from backend.config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_ACCESS_COOKIE_PATH'] = '/api/'
app.config['JWT_REFRESH_COOKIE_PATH'] = '/token/refresh'
app.config['JWT_COOKIE_CSRF_PROTECT'] = False
app.config['JWT_SECRET_KEY'] = 'C1D55AF87585F574A7C7566ED281D'
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(event_routes, url_prefix='/api/events')
app.register_blueprint(session_routes, url_prefix='/api/session')

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)

## Application Security
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
