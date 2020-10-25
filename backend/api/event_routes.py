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
            "host": {
                "id": event.user.id,
                "username": event.user.username,
                "email": event.user.email
            },
            "event_date": event.event_date,
            "event_planet": event.event_planet,
            "event_picture_url": event.event_picture_url,
            "category": {
                "id": event.category.id,
                "type": event.category.type
                },
            "is_featured": event.is_featured
        })
    return jsonify(events)

@event_routes.route('/<id>')
def one_event(id):
    event = Event.query.get(id)
    if event:
        return jsonify({
            "name": event.name,
            "event_description": event.event_description,
            "host": {
                "id": event.user.id,
                "username": event.user.username,
                "email": event.user.email
            },
            "event_date": event.event_date,
            "event_planet": event.event_planet,
            "event_picture_url": event.event_picture_url,
            "category": {
                "id": event.category.id,
                "type": event.category.type
                },
            "is_featured": event.is_featured
        })
    return "There is no event"
