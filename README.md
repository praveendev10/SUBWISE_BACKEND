# Trackly Backend

Trackly Backend is a RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing subscriptions, expenses, and user authentication. It provides secure APIs that power the Trackly frontend application.

## Features

* User Registration & Login
* JWT Authentication
* Password Encryption using bcrypt
* Expense Management (Create, Read, Update, Delete)
* Subscription Management
* Category Management
* Dashboard Statistics
* Search, Filter & Pagination
* Input Validation
* Centralized Error Handling
* Environment Variable Configuration
* RESTful API Architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv
* cors
* nodemon

## Project Structure

```
Trackly-Backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── validations/
├── app.js
├── server.js
├── .env
├── package.json
└── README.md
```

## Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the project.

```bash
cd Trackly-Backend
```

3. Install dependencies.

```bash
npm install
```

4. Create a `.env` file.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Start the development server.

```bash
npm run dev
```

or

```bash
npx nodemon server.js
```

## API Modules

### Authentication

* Register
* Login
* Logout
* Forgot Password
* Reset Password

### Users

* Get Profile
* Update Profile
* Change Password

### Expenses

* Create Expense
* Get All Expenses
* Update Expense
* Delete Expense

### Subscriptions

* Add Subscription
* Update Subscription
* Delete Subscription
* View Upcoming Renewals

### Dashboard

* Total Expenses
* Total Active Subscriptions
* Monthly Summary
* Category-wise Analytics

## Security

* Password hashing with bcrypt
* JWT-based authentication
* Protected API routes
* Environment variables for sensitive data
* Input validation
* Error handling middleware

## Future Enhancements

* Email notifications
* Google Authentication
* Two-Factor Authentication
* Recurring expense automation
* PDF & CSV export
* Docker support
* Swagger API documentation
* Unit & Integration Testing
* CI/CD pipeline
* Deployment to Render or Railway

## License

This project is intended for learning, portfolio, and personal use.
