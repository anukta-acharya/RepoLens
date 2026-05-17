const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
  try {
    const { repoUrl } = req.body;

    const parts = repoUrl.split("/");

    const owner = parts[3];
    const repo = parts[4];

    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );

    const data = response.data;

    console.log(data);

    res.json({
      name: data.name,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
      issues: data.open_issues_count,
      language: data.language,
      lastCommit: data.updated_at,
    });

  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      error: "Failed to analyze repository",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});