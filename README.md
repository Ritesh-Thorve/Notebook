 # Notebook App

## Overview
Notebook App is a web-based application built using React that allows users to create, read, update, and delete (CRUD) notes securely. It features authentication using JWT tokens and encrypts passwords with bcrypt for enhanced security.

## Features
- **User Authentication**
  - Secure login and registration system
  - JWT-based authentication for session management
  - Password hashing with bcrypt

- **Notes Management**
  - Create, read, update, and delete notes
  - User-specific notes with authentication checks
  - Rich text formatting support (if implemented)

- **Security**
  - JWT token validation for protected routes
  - Secure password storage using bcrypt
  - Authentication middleware to prevent unauthorized access

## Tech Stack
- **Frontend**: React, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB 
- **Authentication**: JWT, bcrypt js

## Installation

### Prerequisites
Make sure you have Node.js and npm/yarn installed on your system.

### Steps to Run
1. **Clone the Repository**
   ```sh
   git clone https://github.com/Ritesh-Thorve/Notebook.git
   cd notebook-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the Backend Server**
   ```sh
   npm start
   ```

5. **Start the Frontend**
   ```sh
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/createuser` - Register a new user
- `POST /api/auth/login` - Login user and receive JWT token

### Notes CRUD Operations
- `GET /api/notes` - Get all notes (authenticated)
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Contributing
Feel free to contribute by submitting issues or pull requests. Make sure to follow the best coding practices and update documentation when necessary.

## License
This project is licensed under the MIT License.

