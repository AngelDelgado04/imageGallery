const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const imagesRoutes = require("./routes/imagesRoutes");

app.use(cors({
  origin: ["http://localhost:5173"]
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde el backend! Don ingeniero" });
});

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:5173"];
  if (!allowedOrigins.includes(req.headers.origin)) {
    return res.status(403).json({ error: "Acceso no autorizado" });
  }
  next();
});

app.use("/api", imagesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
