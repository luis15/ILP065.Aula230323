const express = require("express");
var Home = require("./controllers/home");
var Arquivo = require("./controllers/arquivo");

const app = express();
const port = 3001;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let homeController = new Home(req, res);
  homeController.index();
});

app.get("/exibir", (req, res) => {
  let homeController = new Home(req, res);
  homeController.exibir();
});

app.post("/exibir", (req, res) => {
  let arquivoController = new Arquivo(req, res);
  arquivoController.exibir();
});

app.get("/cadastrar", (req, res) => {
  let homeController = new Home(req, res);
  homeController.cadastrar();
});

app.post("/cadastrar", (req, res) => {
  let arquivoController = new Arquivo(req, res);
  arquivoController.cadastrar();
});

app.listen(port, () => {
  console.log("Iniciei na porta " + port);
});
