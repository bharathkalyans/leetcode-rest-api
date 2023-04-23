import express from "express";
export const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).json({
    error: "Endpoint not Found 🎃",
    message: "Check the API documentation for all the Endpoints",
    url: "https://github.com/bharathkalyans/leetcode-rest-api",
  });
});

export default router;
