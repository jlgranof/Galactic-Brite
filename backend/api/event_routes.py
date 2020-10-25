from flask import Blueprint, jsonify
from backend.models import Event

event_routes = Blueprint('events', __name__)

@event_routes.route('/')
def index():
    response = Event.query.all()
    events = []
    for event in response:
        events.append({
            "name": event.name,
            "event_description": event.event_description,
            "host": event.user.username,
            "event_date": event.event_date,
            "event_planet": event.event_planet,
            "event_picture_url": event.event_picture_url,
            "category": event.category.type,
            "is_featured": event.is_featured
        })
    return jsonify(events)
