import express from "express";
const app = express();

app.use(express.json());
 
import path from "path";
app.use(express.static(path.resolve('../client/public/')));

import helmet from "helmet";
app.use("/api", helmet());

import session from "express-session";
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //set to false since I'm not running HTTPS
}))


import synthRouter from "./router/synthRouter.js";
app.use(synthRouter);

import userRouter from "./router/userRouter.js";
app.use(userRouter);

//index.html is served both by clicking a link in the navbar, entering a matching route/url or refreshing the page
app.get('*', (req, res) => res.sendFile(path.resolve('../client/public/index.html')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port: ", PORT));