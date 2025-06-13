// * IMPORTS
// express
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const corsConfig = { origin: "http://localhost:5173" };
//  ARRAY CONTENENTE I POST
const { posts } = require("./data/db");
// file delle rotte dei post
let postRouter = require("./routers/posts");
// middelwares
const notFound = require("./middlewares/endpointNotFound");
const errorsHandler = require("./middlewares/errorsHandler");

// * MIDDELWARES
app.use(cors(corsConfig));
// cartella public contenente gli asset statici
app.use(express.static("public"));
// body parser
app.use(express.json());

// * ROTTE
//  ROTTA PRINCIPALE
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
//  ROTTA /bacheca
app.get("/bacheca", (req, res) => {
  res.json({ posts });
});
//  ROTTE DEI POSTS
app.use("/posts", postRouter);

// *MIDDELWARES ERRORS
app.use(notFound);
app.use(errorsHandler);

// * AVVIO SERVER
app.listen(port, () => {
  console.log("il server è in ascolto sulla porta:" + port);
});
