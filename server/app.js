
import express from "express";
const app = express();

app.use(express.json());
 
import path from "path";
app.use(express.static(path.resolve('../client/public')));

import session from "express-session";
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

import synthRouter from "./router/synthRouter.js";
app.use(synthRouter);

import loginRouter from "./router/loginRouter.js";
app.use(loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port: ", PORT));