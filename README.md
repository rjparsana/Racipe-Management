# Recipe Management Backend
## Description
This is the backend API for the Recipe Management Application. The API handles user authentication using JWT and manages CRUD operations for recipes. It also supports CSV import/export functionality.

## Live URL
The backend is deployed on Vercel and can be accessed via the following link:

Backend Live URL

## API Endpoints
#User Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login and receive a JWT token.

#Recipe CRUD Operations
POST /api/recipes: Create a new recipe (protected).
GET /api/recipes: Retrieve all recipes.
GET /api/recipes/:id: Retrieve a specific recipe by ID.
PUT /api/recipes/:id: Update an existing recipe (protected).
DELETE /api/recipes/:id: Delete a recipe (protected).

#CSV Import/Export
POST /api/recipes/import: Import recipes from a CSV file.
GET /api/recipes/export: Export all recipes to a CSV file.

## Running the Application Locally

I have the following installed:

Node.js: https://nodejs.org/
MongoDB Atlas Account: https://www.mongodb.com/cloud/atlas

### https://github.com/rjparsana8/recipe-management.git


Create a .env file in the root directory and add the following environment variables:

makefile .env

MONGO_URI=mongodb+srv://rjparsana8:BuDWJr468xXHDhzi@cluster0.6idow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=rj_secret

#Running the Server
node index.js

#Access the Application
The server will run on http://localhost:5000.

You can test the endpoints using tools like Postman or cURL.
