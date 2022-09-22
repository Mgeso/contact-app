# contact-app
This is a contact app.

This is an app that help user store there contacts as phone numbers.

It allows them to login using there email and password.

# Setup

- Terminal/CLI command: npm install to install dependencies
- Terminal/CLI command: cp .env.example .env to create .env file based on the .env.example file. setup the created .env file
- Start the app in dev mode: npm run dev

## Routes

User resource

- /users create a user, method: POST
- /users list all users, method: GET
- /users/:id get a single user, method: GET
- /users/:id update a user method: PUT
- /users/id delete users method DELETE
- /users/login login a user method POST

```
/**
* User request body ...POST (create a user)
*
* {
*   "surname": "string",
*   "firstname": "string",
*   "othername": "string",
*   "phone_number": "string",    
*   "user Id": "string"
*   
* }
*/
````

````
/**
* User request body ...GET (list all users)
*
* { 
*   "email": "string@example.com",
*   "password": "string",
*   "token":  "string"
* }
*/
````

````
/**
* User request body ...GET (get a single user)
* 
* {
*    "email": "string@example.com",
*    "password": "string",
* }
*/
````

````
/**
* User request body ...PUT (update a user)
*
* {
*  "id":"62bc448e1830409342963",
*    "content":"mgeso's content"
* }
*/
````

````
/**
* User request body ...DELETE (delete a user)
*
* {
* "id": "6310ce4286dc58a59dfbe649"
* }
*/
````

````
/**
* User request body ...LOGIN (login in a user)
*
*{
*  "email": "string@example.com",
*  "password": "string"    
* }
*/
````

Other resources are being created according to the requirements at the moment 

# Completed