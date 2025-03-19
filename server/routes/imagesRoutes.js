const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

const API_KEY = process.env.PEXELS_API_KEY;

router.get("/images", async (req, res) => {
  try {
    const query = req.query.query || "art";

    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: { Authorization: API_KEY },
      params: { query, per_page: 10 },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener imágenes:", error.message);
    res.status(500).json({ error: "Server internal error" });
  }
});

module.exports = router;
