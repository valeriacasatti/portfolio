import express from "express";
import cors from "cors";
import { config } from "./config/config.js";

// server
const PORT = config.server.port;
const app = express();
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});

app.use(cors());
app.use(express.json());
