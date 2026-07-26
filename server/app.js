const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const githubRoutes = require("./routes/githubRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

app.get("/", (req, res) => {
    res.json({
        status: "success",
        project: "DevTrace",
        message: "Backend is running successfully 🚀"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});