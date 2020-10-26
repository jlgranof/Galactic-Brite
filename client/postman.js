GET http://localhost:5000/api/users/

###

POST http://localhost:5000/api/users/
content-type: application/json

{
    "username": "alecbrand",
    "email": "alecbgarcia@gmail.com",
    "password": "password"
}
###

DELETE http://localhost:5000/api/users/16
###

GET http://localhost:5000/api/events/
