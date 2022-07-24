/* eslint max-len: ["error", { "code": 200 }] */
require("dotenv").config({path: "./TEST.env"});

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);

// APP Config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hellooo"));

app.post("/payments/create", async (request, response) => {
  // get the amount in subunits
  const total = request.query.total;

  console.log("Payment request received, for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  console.log("Payment intent: ", paymentIntent);

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example API route
// http://localhost:5001/clone-84b1f/us-central1/api