// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import { sendEmail } from "./utils/mail.ts";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("src/public"));
app.use(express.json());

// Routes
app.get("/", async (_, res) => {
  try {
    res.json({ message: "Server is running" });
  } catch (error) {
    console.error(error);
  }
});

app.post("/mail", async (req, res) => {
  try {
    const {
      naam,
      voornaam,
      geboortedatum,
      haarkleur,
      lengte,
      geslacht,
      opmerking,
    } = req.body;

    await sendEmail({
      naam,
      voornaam,
      geboortedatum,
      haarkleur,
      lengte,
      geslacht,
      opmerking,
    });

    res.status(200).json({ message: "Email sent." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send." });
  }
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}! 🚀`);
});
