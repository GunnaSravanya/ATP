import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import { userApp } from "./API/userAPI.js";
import { adminApp } from "./API/adminAPI.js";
import { authorApp } from "./API/authorAPI.js";
import { commonApp } from "./API/commonAPI.js";

config();

const app = exp();

// middleware
app.use(exp.json());
app.use(cookieParser());

//CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

//handle preflight
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// routes
app.use("/user-api", userApp);
app.use("/admin-api", adminApp);
app.use("/author-api", authorApp);
app.use("/common-api", commonApp);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// DB + server
connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT || 4000, () => console.log("Server running"));
  })
  .catch((err) => console.log("DB error:", err));
