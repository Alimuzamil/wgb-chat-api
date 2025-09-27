const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");

/**
 * @swagger
 * /api/chat:
 *   post:
 *     summary: Get chatbot response
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello"
 *     responses:
 *       200:
 *         description: Chatbot response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   example: "You said: Hello"
 *       400:
 *         description: Bad request
 */
router.post("/chat", chatbotController.chat);

module.exports = router;
