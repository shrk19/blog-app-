import express from "express";
import { signup, signin, logout, refetch } from "../controllers/auth.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router
  .post("/signup", signup)
  .post("/signin", signin)
  .get("/logout", logout)
  .get("/refetch", verifyToken, refetch);

export default router;
