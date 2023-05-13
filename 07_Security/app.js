import express from "express";
import "dotenv/config";



const app = express();
import path from "path";

app.use(express.static(path.resolve("../06._Svelte_Family/dist")));

import helmet from "helmet";
app.use(helmet());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true,
  })
);
// go into node and type: require('crypto').randomBytes(64).toString("hex") for sessions secrets is fine.
import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false,maxAge:20000  }, // cookie udløber efter 20 sek
  })
);

import gothamRouter from "./router/gothamRouter.js";
app.use(gothamRouter);


import rateLimit from "express-rate-limit";

// limit api requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes to start requesting again after sending too many
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth",authLimiter);

import authRouter from './router/authRouter.js'
app.use(authRouter)

app.get("/item", (req, res) => {
  req.session.food +=1;
  res.send({ message: `Food ${req.session.food}` });
});


app.get("/piblings", (req, res) => {
  res.send({ data: ["John", "Mark"] });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));

