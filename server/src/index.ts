// ----------------------------------------------------------------------------------------
// >> SERVER << //
// ----------------------------------------------------------------------------------------

import express from "express";
import cors from "cors";
import "dotenv/config";
import chalk from "chalk";
import errorHandler from "./middleware/errorHandler";
import routes from "./routes";

const app = express();
const port = process.env.PORT;

// ------------------------------------------------------------------------------------------------
// * MIDDLEWARE
// ------------------------------------------------------------------------------------------------

app.use(cors());

// ! Test to see if server is running
app.get("/", (req, res) => {
  res.status(200).send("Hello from the server side! Time to go!");
});

// ! Using this as a test endpoint to send to frontent for connection confirmation
app.get("/status", (req, res) => {
  res.status(200).json({ status: "online", message: "Server is online!" });
});

app.use(express.json()); // EXPRESS
app.use("/api", routes); // ROUTES

// ----------------------------------------------------------------------------------------
// * 404 HANDLER
// ----------------------------------------------------------------------------------------
app.use((req, res) => {
  console.warn(`404 - Route not found: ${req.originalUrl}`);
  res.status(404).json({ message: "Route not found" });
});

// ----------------------------------------------------------------------------------------
// * ERROR HANDLER MIDDLEWARE
// ----------------------------------------------------------------------------------------
app.use(errorHandler);

// ----------------------------------------------------------------------------------------
// * START SERVER
// ----------------------------------------------------------------------------------------
// * Only start the server if not in test environment
// * This prevents the server from starting during tests

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(
      chalk.bgGreenBright(
        `Server is up and running @ http://localhost:${port}`,
      ),
    ),
  );
}

// ------------------------------------------------------------------------------------------------
// * MODULE EXPORT
// ------------------------------------------------------------------------------------------------
export default app;
