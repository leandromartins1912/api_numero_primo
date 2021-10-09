const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors());
  next();
});

const router = require("../rotas/calculo");
app.use("/api/calculo", router);

app.listen(3001, () => console.log("A API está funcionando!"));
