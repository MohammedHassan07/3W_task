# 3W_task
## Social Media Submission System

## Description
This project is a system that allows users to submit their name, social media handle, and upload multiple images. The submitted data is stored in a MongoDB database and displayed on an admin dashboard. The admin can view all users' submissions, including their names, social media handles, and the images they uploaded.

## Features

- **User Form**: Users can input their name, social media handle, and upload multiple images.
- **Data Storage**: All the data, including name, social media handle, and images, are stored in a MongoDB database.
- **Admin Dashboard**: Admins can view a list of all submissions, displaying user names, social media handles, and uploaded images.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation and Setup

### Prerequisites
- Node.js (version 14.x or higher)
- MongoDB (either locally or a MongoDB Atlas account for cloud database)

### Steps

1. **Clone the repository**:
2. **Backend Setup (Node.js, Express.js)**:
- Navigate to the backend directory and install dependencies:
  ```
  cd backend
  npm install
  ```
- Create a `.env` file and configure your MongoDB connection string:
  ```
  MONGO_URI=your-mongodb-connection-string
  PORT=3000
  ```
- Start the backend server:
  ```
  npm start
  ```

3. **Frontend Setup (React.js)**:
- Navigate to the frontend directory and install dependencies:
  ```
  cd frontend
  npm install
  ```
- Start the frontend server:
  ```
  npm start
  ```
The frontend will be available at `http://localhost:3000`.

4. **Access the Application**:
- The user form will be available on the homepage (`http://localhost:3000`).
- The admin dashboard will display the list of all submissions.

## Features in Detail

### 1. **User Submission Form**:
- Users will input their **name** and **social media handle**.
- Users can upload **multiple images** using the file input, which allows selecting multiple files at once.
- When the form is submitted, the data (name, social media handle, and images) is sent to the backend, where it is stored in the MongoDB database.

### 2. **Admin Dashboard**:
- The admin dashboard fetches all user submissions from the database.
- Each submission displays:
  - User's **name**
  - User's **social media handle**
  - **Uploaded images** (displayed as thumbnails or clickable links).
- The dashboard dynamically updates as new submissions are made.


