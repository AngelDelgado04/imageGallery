const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const imagesRoutes = require("./routes/imagesRoutes");

const SERVER_URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors({
  origin: [CLIENT_URL],
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde el backend! Don ingeniero" });
});

app.use((req, res, next) => {
  const allowedOrigins = [CLIENT_URL];
  if (!allowedOrigins.includes(req.headers.origin)) {
    return res.status(403).json({ error: "Acceso no autorizado" });
  }
  next();
});

app.use("/api", imagesRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
