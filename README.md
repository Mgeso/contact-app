# contact-app
This is a contact app.


TO START THE APP

<!-- type "npm i" to install dependencies -->
<!-- type "npm run dev" on your terminal -->
EXISTING ROUTES

contact/all contact (fetched all the contacts in the db)
contact/new contact (creates a new contact in db)
contact/update contact (updates a contact in the db)
contact/delete contact (delete a particular contact by its id)
the contact app is explicitly split into different folders each to serve or perform a particular function or use case here we have

--controllers | |-- they take in data and perform various functions like handling contact creation, contact update,contact deletion, get all contacts and interact with services which in turn interact with mongo db

-- services | |-- they receive data directly from controllers and interact with db to return the response of queries made to it

-- config | |--contains the config code for connecting the app to mongodb using mongoose

-- models | |-- it holds the mongoose schema that perfoms various operations on db

-- routes | |--index.routes - holds the index to access all operations that can be done in the contact app |--contact.routes - holds the different routes for the contact app

-- schema | |--holds the validator schema and functions used for validating requests made to the contact app

-- middlewares | | -- holds the various middlwares used in the contact app like error handling,connecting the app to db
