import requests
from random import randint

def random_name():
    people = requests.get(f"https://swapi.dev/api/people/{randint(1,83)}").json()['name']
    species = requests.get(f"https://swapi.dev/api/species/{randint(1,37)}").json()['name']
    planets = requests.get(f"https://swapi.dev/api/planets/{randint(1,60)}").json()['name']

    return f"{people} {species} {planets}"
