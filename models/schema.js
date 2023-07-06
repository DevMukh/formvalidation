import mongoose from "mongoose";
import timeStamp from "console";
const userschema = new mongoose.Schema(
  {
    stdname: {
      type: "string",
      required: true,
      min: "3",
    },
    regno: {
      type: "string",
      required: true,
      unique:true,
    },
    sec: {
      type: "string",
      required: true,
    },
  },
  { timeStamp: true }
);
export default mongoose.model("mycollection", userschema);
