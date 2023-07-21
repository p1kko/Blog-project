import express from "express";
import mongoose from "mongoose";
import { registerValidation, loginValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import { getMe, login, register } from "./constrollers/UserController.js";
import { create } from "./constrollers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://artikpikko:prodamza1500@cluster0.wdbexvb.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB ok!");
  })
  .catch((err) => {
    console.log("DB NOT CONNECTED", err);
  });

const app = express();

app.use(express.json());




// Login user-------------------------------------------------------------------------------------
app.post("/auth/login", loginValidation, login);



// Register user ---------------------------------------------------------------------------------------
app.post("/auth/register", registerValidation, register);

// Check authorization ------------------------------------------------------------

app.get("/auth/me", checkAuth, getMe)

// Server listener ----------------------------------------------------

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
