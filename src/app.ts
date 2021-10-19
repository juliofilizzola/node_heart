import express from "express";

const app = express();

const id = process.env.GITHUB_CLIENT_ID;

const port = 4000;

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${id}`);
});

app.listen(port, () => console.log(`listening on port 🚀 ${port}`));