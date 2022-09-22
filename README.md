# contact-app
This is a contact app.

This is an app that help user store there contacts as phone numbers.

It allows them to login using there email and password.

# Setup

Terminal/CLI command: npm install to install dependencies
Terminal/CLI command: cp .env.example .env to create .env file based on the .env.example file. setup the created .env file
Start the app in dev mode: npm run dev

# Routes

User resource

/users create a user, method: POST
/users list all users, method: GET
/users/:id get a single user, method: GET
/users/:id update a user method: PUT/PATCH
/users/id delete users method DELETE
/users/login login a user method POST
