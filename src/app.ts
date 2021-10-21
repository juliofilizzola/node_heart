import "dotenv/config";
import express from "express";
import http from "http";
import { Server } from "socket.io";

import { router } from "./router/router";

const app = express();

const serverHttp = http.createServer(app);
const io = new Server(serverHttp);

const id = process.env.GITHUB_CLIENT_ID;

const port = 4000;

app.use(express.json());

app.use(router);

app.get('/github', (req, res) => {
  return res.redirect(`https://github.com/login/oauth/authorize?client_id=${id}`);
});


app.get('/signin/callback', (req, res) => {
  const { code } = req.query;
  return res.json(code);
});

app.listen(port, () => console.log(`listening on port 🚀 ${port}`));