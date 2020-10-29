from flask import Blueprint, jsonify
import requests


quote_routes = Blueprint('quotes', __name__)

@quote_routes.route('/')
def get_quote():
    response = requests.get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
    quote = response.json()
    return jsonify(quote)
