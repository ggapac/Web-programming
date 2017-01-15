# Installation

----
## Database
In order for app to work, we need to store data in some kind of a database. MySQL database was used, its script `done_db.sql` can be found in the install folder.

For database setup we also need to define some environmental variables:

* `DB_HOST`: hostname of our database
* `DB_USER`: username of our database
* `DB_PASSWORD`: password of our database

An admin has to be created in the database directly.

----
## Sails.js
The app is written in Sails.js, a framework that is based on Node.js and Express.js, so we need to have it installed.

When deploying we also need to install all required dependencies with a simple command: `npm install`.

To start the app all we have to do is write the following command: `npm start`.