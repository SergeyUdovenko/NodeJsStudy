HOMEWORK 1
NODE.JS MODULES. NPM
Installing Node.js & Configuring Babel with Nodemon
1. Install Node.js (choose any option that suits you nvm , brew , apt , .exe , etc).
2. Create a directory for the future project.
3. Use npm to set author name and email for npm config :
a. Use npm -l to discover available npm commands and full usage info.
4. Initialize package.json using npm command.
5. Create the main application file app.js . This file will be executed on npm start .
6. Install the following npm packages as devDependencies :
a. Babel core
b. Babel preset env
c. Babel preset stage 2
d. Babel register
e. Nodemon
After the installation all these packages should be saved and listed in package.json .
7. Configure scripts section in package.json to include:
a. start script which should compile app.js using babel and run it in nodemon .
b. test script to run application tests that we will create in the future (for now it could
be empty).
Adding Modules
1. Create config directory inside your project.
2. Create json module in config directory to store configs of application. For now add just
one field name that stores the name of the app: “Node.js Homework Application” .
3. Create models directory.
4. Create User.js module in models directory. It should implement and export class User
( use ECMAScript 2015 ) with a constructor that logs “User module” to console.
5. Create Product.js module in models directory which exports Product class with a
constructor that logs “Product module” to console.
6. In the main application file import json module defined in config directory ( use
ECMAScript 2015 as well instead of require ) and log the name of application to
console.
7. In the main application file import modules defined in models directory. There should be
one import command that brings all our models to the app.
8. Create instances of User and Product classes. Appropriate messages should be logged
to console.
Evaluation Criteria
1. Nothing has been done except the project’s structure.
2. package.json has been created and contains the list of required packages.
3. All three modules have been created and the classes have been implemented.
4. The modules are imported to the main module as described in task 7 and 8.
5. package.json “start” script uses babel and nodemon to run the app.