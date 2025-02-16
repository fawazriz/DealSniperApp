import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const corsOptions = {
    origin: "http://localhost:5173",
};

const app = express();

app.use(cors(corsOptions));

dotenv.config();  // Load environment variables from .env file
const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT is not set

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});