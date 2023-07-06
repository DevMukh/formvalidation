import { userInfo } from "os";
import model from "../models/schema.js";
const form = async (req, res) => {
  try {
    const { stdname, regno, sec } = req.body;
    if (!stdname || stdname.length < 3) {
      res.status(300).send({
        message: "Please enter name",
        success: "false",
      });
    }
    if (!regno) {
      res.status(300).send({
        message: "Please enter regno",
        success: "false",
      });
    }
    if (!sec) {
      res.status(300).send({
        message: "Please enter section number",
        success: "false",
      });
    }

    const existinguser = await model.findOne({ regno });
    if (existinguser) {
      res.status(230).send({
        message: "ALREADY present",
        success: "true",
      });
    }
    const newuser = new model({
      stdname,
      regno,
      sec,
    });
    await newuser.save();
    res.status(200).send({
      message: "User created successfully",
      success: "true",
      newuser,
    });
    console.log("user added successfully");
    console.log(req.body);
  } catch (e) {
    res.status(500).send({
      message: "Error user not found",
    });
  }
};
export default form;
