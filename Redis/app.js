const express = require("express");
const bodyParser = require("body-parser");
const redis = require("redis");
const responseTime = require("response-time");

const client = redis.createClient();
client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));

const app = express();
app.use(bodyParser.json());
app.use(responseTime());

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("¡Un saludo desde el backend!");
});

app.post("/enviar", async (req, res) => {
  const { nombre } = req.body;
  await client.set("nombre", nombre);
  res.status(200).json({ Status: "ok" });
});

app.get("/obtener", async (req, res) => {
  const nombre = await client.get("nombre");
  res.status(200).json({ Nombre: nombre });
});

app.get("/datos", async (req, res) => {
  const { nombre } = req.query;

  const datoNombre = await client.get("nombre");

  if (datoNombre == null) {
    await client.set("nombre", nombre);
    return res.status(200).json({ Status: "ok" });
  }

  res.status(200).json({ Nombre: datoNombre });
});
