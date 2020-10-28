import requests
from random import randint
from backend.api.custom_events.planet import random_planet
from backend.api.custom_events.species import random_species
from backend.api.custom_events.people import random_people

def random_name():
    people = random_people()
    species = random_species()
    planets = random_planet()

    return f"{people} {species} {planets}"
