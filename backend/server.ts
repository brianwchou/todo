import * as dotenv from "dotenv";
dotenv.config();
import express, { json, urlencoded } from "express";
import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";
const saltRounds = 10;

const prisma = new PrismaClient();

const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.use(json());
// app.use(urlencoded());

app.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
  res.send("Hello world!");
});

app.post("/createuser", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const passwordRe = new RegExp(
    "^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-#$.%&*])(?=.*[a-zA-Z]).{8,16}$"
  );
  if (passwordRe.test(password)) {
    res.status(400).json({ passwordError: "password is missing letters" });
  }

  // validate password
  // validate email

  // bcrypt.genSalt(saltRounds, function (error, salt) {
  //   bcrypt.hash("blahblah", salt, function (err, hash) {
  //     prisma
  //     console.log(`hash:${hash} salt:${salt}`);
  //   });
  // });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
