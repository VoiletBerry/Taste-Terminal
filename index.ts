import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { expressApp } from "./services/express-app";
import { connect } from "./services/db-connection";

dotenv.config();

const StartServer = async () => {
  const app = express();

  await connect();

  await expressApp(app);

  app.listen(8080, () => {
    console.clear();
    console.log("App is running");
  });
};

StartServer();
