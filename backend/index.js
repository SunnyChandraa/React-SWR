import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoutes.js"
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
})