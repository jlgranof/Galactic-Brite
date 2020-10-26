from random import randint
import requests
from description import random_description
from date import random_date
from name import random_name

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
