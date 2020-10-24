const express = require("express");
const cors = require("cors");
const app = express();

const cep = require("./src/router/cep.routes"); // Imports routes for the cep
const preco = require("./src/router/preco.routes"); // Imports routes for the preco
const rastreio = require("./src/router/rastreio.routes"); // Imports routes for the rastreio

app.use(express.json()); 
app.use(cors({ origin: true }));

app.use("/cep", cep);
app.use("/preco", preco);
app.use("/rastreio", rastreio);

const PORT = 3000;

app.listen(PORT, function () {
  console.log('Example app listening on port 3000.');
});