const express = require("express");
require("dotenv").config();

const router = express.Router();

const API_KEY = process.env.PEXELS_API_KEY;

router.get("/images", async (req, res) => {
  try {
    const query = req.query.query || "art";

    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, {
      headers: { Authorization: API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Error in Pexels API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error obtaining images:", error.message);
    res.status(500).json({ error: "Server internal error" });
  }
});

module.exports = router;
