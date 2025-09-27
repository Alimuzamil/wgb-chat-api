const { getChatbotResponse } = require("../services/chatbotService");

exports.chat = (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  const response = getChatbotResponse(message);
  res.json({ response });
};
