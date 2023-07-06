import express from "express";
import bodyParser from "body-parser";
import mongoconn from "./config/database.js";
import form from "./controllers/controller.js";
import cors from "cors";
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoconn();
router.post("/form", form);
app.use("/api/v1/auth", router);
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
