const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app.js");

// const DB = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB!");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//     process.exit(1); // Gracefully exit the app on connection error
//   });

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true, // Optional with newer drivers
    useUnifiedTopology: true, // Optional with newer drivers
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the app on connection error
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// Here basically on unhandledrejection we gracefull shut down the app
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // Usually we first shut down the server and then the application. SMOOTH
  server.close(() => {
    process.exit(1);
  });
});

// Similar to what we did above we'll do the same for our deployment
// Render basically sends a sigterm signal which shuts down the app abruptly, we want to shut down gracefully
// Basically it will first handle the pending request and then shut down gracefully
process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED, Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated...");
    // Here we do not use process.exit, because the sigterm will automatically shut down the process
  });
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
