import express from "express";
import chalk from "chalk";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/postsRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const port = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(port, () =>
      console.log(
        chalk.cyanBright.bold(
          "data base connected and Listening on port: ",
          port
        )
      )
    )
  )
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/posts", router);

app.post("/", (req, res) => {});

// app.listen(port, () =>
//   console.log(chalk.redBright.bold("Listening on port: ", port))
// );

// mongoose.connect(
//   "mongodb+srv://vonnryann:1234@cluster0.z7c06fn.mongodb.net/Part-two?retryWrites=true&w=majority",
//   () => console.log("connected to DB")
// );
