import mongoose from "mongoose";

const mongoconn = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://admin:admin123@database.jnmg4od.mongodb.net/"
    );
    console.log("Mongodb connection successful");
  } catch (e) {
    console.log("Error connecting to database");
  }
};
export default mongoconn;
