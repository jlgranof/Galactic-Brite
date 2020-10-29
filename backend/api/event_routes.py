from random import randint
from flask import Blueprint, jsonify, request
from backend.models import Event, Picture, BookmarkedEvent, db
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
                "email": event.user.email,
                "avatar_url": event.user.avatar_url
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
                "email": event.user.email,
                "avatar_url": event.user.avatar_url
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


@event_routes.route('/random/<amount>')
def random_events(amount):
    events = []
    for i in range(1,int(amount) + 1):
        events.append(get_random_event())
    return jsonify(events)

@event_routes.route('/bookmarks/<user_id>')
def bookmarked_events(user_id):
    bookmarked_events = []
    events = BookmarkedEvent.query.filter(BookmarkedEvent.user_id == user_id)
    for event in events:
        bookmarked_events.append({
            "is_registered": event.is_registered,
            "name": event.event.name,
            "event_description": event.event.event_description,
            "host": {
                "id": event.event.user.id,
                "username": event.event.user.username,
                "email": event.event.user.email,
                "avatar_url": event.event.user.avatar_url
            },
            "event_date": event.event.event_date,
            "event_planet": event.event.event_planet,
            "event_picture_url": event.event.event_picture_url,
            "category": {
                "id": event.event.category.id,
                "type": event.event.category.type
                },
            "is_featured": event.event.is_featured

        })
    return jsonify(bookmarked_events)


@event_routes.route('/custom', methods=['POST'])
def add_custom_event():
    data = request.json
    errors = []
    event_description = data['event_description']
    event_details = data['event_details']
    event_picture_url = Picture.query.get(randint(1, 37)).url
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
