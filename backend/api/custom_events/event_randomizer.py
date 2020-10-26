from random import randint
import requests
from backend.api.custom_events.description import random_description
from backend.api.custom_events.date import random_date
from backend.api.custom_events.name import random_name

def get_random_event():
    return {
    "name": random_name(),
    "event_description": random_description(),
    "host_id": randint(1,9),
    "event_date": random_date(),
    "event_planet": requests.get(f"http://swapi.dev/api/planets/{randint(1,60)}/").json()['name'],
    "is_featured": False
}

print(get_random_event())
