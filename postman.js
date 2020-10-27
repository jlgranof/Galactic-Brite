GET http://localhost:5000/api/users/

###

POST http://localhost:5000/api/users/
content-type: application/json

{
    "username": "kasey",
    "email": "kasey@gmail.com",
    "password": "password"
}
###

DELETE http://localhost:5000/api/users/24

###

GET http://localhost:5000/api/events/

###
GET http://localhost:5000/api/session/login
content-type: application/json

{
    "email": "alecbgarcia@gmail.com",
    "password": "password"
}

###
GET http://localhost:5000/api/session/logout

###
POST http://localhost:5000/api/session/token/auth
content-type: application/json

{
    "email": "kasey@gmail.com",
    "password": "password"
}