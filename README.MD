# ContactBook-backend

## Description

ContactBook-backend is a Node.js backend application designed to provide robust backend services for managing contacts. It utilizes technologies like Express.js, MongoDB, Mongoose, JWT, and Passport.js to ensure secure authentication, efficient data handling, and seamless integration.

## Features

- **User Authentication:** Secure user authentication using JWT (JSON Web Tokens) and Passport.js.
- **Contact Management:** Perform CRUD (Create, Read, Update, Delete) operations for managing contacts.
- **Data Validation:** Input validation and schema modeling with Joi and Mongoose.
- **Scalable Architecture:** Designed with scalability in mind, ensuring smooth performance even with large datasets.
- **RESTful API:** Exposes a RESTful API for seamless integration with frontend applications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and specify the following variables:

   ```plaintext
   NODE_ENV=development
   PORT=
   MONGODB_URI=
   JWT_SECRET=
   JWT_EXPIRES_IN=
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

- **Endpoints:**

  - `/api/contacts`: Manage contacts (GET, POST, PUT, DELETE).
  - `/api/auth`: User authentication (POST).

- **Authentication:**

  - To authenticate, send a POST request to `/api/auth/login` with valid credentials.
  - Include the generated JWT token in the Authorization header for subsequent requests.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Passport.js](http://www.passportjs.org/)
- [Joi](https://joi.dev/)
