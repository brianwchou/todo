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
app.use(urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
  res.send("Hello world!");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  let errors = [];
  if (username.length === 0) {
    errors.push({ type: "username", message: "username field is empty" });
  } else if (password.length === 0) {
    errors.push({
      type: "password",
      message: "password field is empty",
    });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors: errors });
    return;
  }

  // check if username is in the database
  let user = await prisma.user.findUnique({ where: { username } });
  if (user === null) {
    errors.push({ type: "user", message: "username not found" });

    res.status(400).json({ errors: errors });
    return;
  }

  // validate password
  let hash = bcrypt.hashSync(password, user.salt);
  if (!bcrypt.compareSync(password, user.passwordHash)) {
    errors.push({ type: "user", message: "password incorrect" });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors: errors });
    return;
  }
  // after password validation
  // session token granted here

  res.status(200).send("ok");
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  const passwordReg = new RegExp(
    "^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-#$.%&*])(?=.*[a-zA-Z]).{8,16}$"
  );
  const emailReg = new RegExp("^([w.-]+)@([w-]+)((.(w){2,3})+)$");
  console.log(req.body);

  type Error = { type: string; message: string };
  let errors: Error[] = [];

  if (username.length === 0) {
    errors.push({ type: "username", message: "username field is empty" });
  }

  if (password.length === 0) {
    errors.push({
      type: "password",
      message: "password field is empty",
    });
  } else if (passwordReg.test(password)) {
    errors.push({
      type: "password",
      message: "something wrong with your password",
    });
  }

  if (email.length === 0) {
    errors.push({ type: "email", message: "email field is empty" });
  } else if (emailReg.test(email)) {
    errors.push({ type: "email", message: "something wrong with your email" });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors: errors });
    return;
  }
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      username,
      passwordHash: hash,
      salt,
    },
  });

  // return any errors found from prisma such as email already used or user name alreay used

  // if sucessful need to do an email verfication thing

  console.log(user);

  res.status(200).send("we good");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
