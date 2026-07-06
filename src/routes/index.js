import { Router } from "express";
import path from "path";
import isLoggedIn  from "../middlewares/isLoggedIn.js";

const router = Router();
const viewsPath = path.resolve("src", "views");

router.get("/", isLoggedIn, (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(viewsPath, "register.html"));
});

export default router;
