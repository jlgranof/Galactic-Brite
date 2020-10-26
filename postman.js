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

###
GET http://localhost:5000/api/session/login
content-type: application/json

{
    "email": "alecbgarcia@gmail.com",
    "password": "password"
}

###
GET http://localhost:5000/api/session/logout
content-type: application/json

{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE3LCJleHAiOjE2MDM2ODQ4MTZ9.Qc4t9cxnynet-OkAioKNqI9hd_XePZXCc6tFoG_3kc8"
}
