const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:owner/:repo", async (req, res) => {
  const { owner, repo } = req.params;

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          "User-Agent": "DevTrace"
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    console.log("GitHub API Error:");
    console.log(error.response?.status);
    console.log(error.response?.data || error.message);

    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || error.message
    });
  }
});

module.exports = router;