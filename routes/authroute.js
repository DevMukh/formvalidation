import express from "express";
import form from "../controllers/controller.js";
const router = express.Router();
router.post("/form", form);
