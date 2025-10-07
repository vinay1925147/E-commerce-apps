import mongoose from "mongoose";
async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://vinayasati5_db_user:Vinay123@cluster1.u6wrl5r.mongodb.net/");
    console.log("connection successfuly");
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
