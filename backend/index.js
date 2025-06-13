import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { transporter } from "./config/gmail.js";
import { __dirname } from "./utils.js";
import path from "path";

// server
const PORT = config.server.port;
const app = express();
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});

// middlewares
app.use(cors());
app.use(express.json());

// mail sending logic
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const emailOptions = {
      from: email,
      to: config.gmail.account,
      subject: `New message from your portfolio from ${name}`,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(emailOptions);

    res.status(200).send("Email sent successfully");
  } catch (e) {
    console.log(`Error sending email: ${e.message}`);
    res.status(500).send("Error sending email");
  }
});

// serve the frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use(express.static(path.join(__dirname, "frontend/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
