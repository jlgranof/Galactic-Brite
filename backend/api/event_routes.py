from flask import Blueprint, jsonify
from backend.models import Event

event_routes = Blueprint('events', __name__)

@event_routes.route('/')
def index():
