from random import randint
from flask import Blueprint, jsonify, request
from backend.models import Event, Picture, db
from backend.api.custom_events.event_randomizer import get_random_event


event_routes = Blueprint('events', __name__)

@event_routes.route('/featured')
def featured_events():
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
    return "There is not an event with that ID"


@event_routes.route('/random')
def random_events():
    events = []
    for i in range(1,11):
        events.append(get_random_event())
    return jsonify(events)

@event_routes.route('/custom', methods=['POST'])
def add_custom_event():
    data = request.json
    errors = []
    event_description = data['event_description']
    event_details = data['event_details']
    event_picture_url = Picture.query.get(randint(1,37)).url
    data['event_picture_url'] = event_picture_url
    custom_event = Event(
        name=data['name'],
        event_description=f'{event_description}\n{event_details}',
        host_id=data['host_id'],
        event_date=data['event_date'],
        event_planet=data['event_planet'],
        event_picture_url=event_picture_url,
        category_id=data['category_id'],
        is_featured=True
    )
    if errors:
        return jsonify(errors)
    db.session.add(custom_event)
    db.session.commit()
    return jsonify(data)
