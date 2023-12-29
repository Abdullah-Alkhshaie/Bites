require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const bodyParser = require("body-parser");

// Load environment variables from .env file
require("dotenv").config();

const port = process.env.PORT || 3001; // Use port 3001 if PORT is not defined
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/pay", async (req, res) => {
  try {
    const charge = await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });
    res.status(200).json({ success: true, message: "Payment successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
