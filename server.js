require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chatbotRoutes = require("./routes/chatbotRoutes");
const { swaggerUi, specs } = require("./swagger");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger docs route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Chatbot API route
app.use("/api", chatbotRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
