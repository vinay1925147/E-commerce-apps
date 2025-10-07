import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/auth.route.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Vinay Asati");
});

app.listen(port, () => {
  console.log(`server is started at ${port}`);
  connectDB();
});
