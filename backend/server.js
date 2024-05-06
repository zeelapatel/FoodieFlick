import express from 'express';
import dotenv from 'dotenv'
import connection from './database/db.js';
// import router from './routes/route.js';
import cors from 'cors';
// import bodyParser from 'body-parser';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Enable Cross-Origin Resource Sharing (CORS) middleware
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
    credentials: true, // enable passing cookies across origins
}));

// // Parse incoming request bodies in JSON format
// app.use(bodyParser.json({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true }))

// Use the defined routes
// app.use('/', router);

const PORT = 8000;

// Start the server
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

// Retrieve database credentials from environment variables
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Establish database connection using credentials
connection(USERNAME, PASSWORD);
