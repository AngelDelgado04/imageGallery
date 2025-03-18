const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde el backend! Don ingeniero" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

const API_KEY = process.env.VITE_API_KEY;
app.get("/images", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }

    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: { Authorization: API_KEY },
      params: { query, per_page: 10 },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
});