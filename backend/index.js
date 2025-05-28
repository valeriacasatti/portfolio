import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { transporter } from "./config/gmail.js";

// server
const PORT = config.server.port;
const app = express();
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const emailOptions = {
      from: email,
      to: config.gmail.account,
      subject: `Nuevo mensaje desde tu portfolio de parte de ${name}`,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(emailOptions);

    res.status(200).send("Email sent successfully");
  } catch (e) {
    console.log(`Error sending email: ${e.message}`);
    res.status(500).send("Error sending email");
  }
});
