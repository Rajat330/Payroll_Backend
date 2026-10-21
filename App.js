import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./config/db.js";
import router from "./route/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req, res) => {
    res.send("Backend successfully runs");
});

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    });
});