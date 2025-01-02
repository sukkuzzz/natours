import fs from "fs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Tour from "../../models/tourModel.js";
import User from "../../models/userModel.js";
import Review from "../../models/reviewModel.js";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("DB connection successful");
});

/////Read Json file
const tours = JSON.parse(
  fs.readFileSync("./dev-data/data/tours.json", "utf-8")
);
const users = JSON.parse(
  fs.readFileSync("./dev-data/data/users.json", "utf-8")
);
const reviews = JSON.parse(
  fs.readFileSync("./dev-data/data/reviews.json", "utf-8")
);

///import data to database
const importData = async () => {
  try {
    //await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    //await Review.create(reviews);
    console.log("Data successfully loaded");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

/// delete all data from collection
const deleteData = async () => {
  try {
    //await Tour.deleteMany();
    await User.deleteMany();
    //await Review.deleteMany();
    console.log("Data successfully deleted");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
