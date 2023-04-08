import * as dotenv from "dotenv";
dotenv.config();
import express, { json, urlencoded } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
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
  const passwordReg = new RegExp(
    "^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-#$.%&*])(?=.*[a-zA-Z]).{8,16}$"
  );
  const emailReg = new RegExp("^([w.-]+)@([w-]+)((.(w){2,3})+)$");

  type Error = { type: string; message: string };
  let errors: Error[] = [];

  if (!password.length) {
    errors.push({
      type: "password",
      message: "passwordfield is empty",
    });
  } else if (passwordReg.test(password)) {
    errors.push({
      type: "password",
      message: "something wrong with your password",
    });
  }

  if (!email.length) {
    errors.push({ type: "email", message: "emailfield is empty" });
  } else if (emailReg.test(email)) {
    errors.push({ type: "email", message: "something wrong with your email" });
  }

  if (errors.length > 0) {
    res.status(400).json(errors);
    return;
  }

  console.log("RUNNING BCRYPT");
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const user = await prisma.user.create({
    data: {
      name: firstName + " " + lastName,
      email,
      passwordHash: hash,
      salt,
    },
  });
  console.log(user);

  res.status(200).send("we good");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
