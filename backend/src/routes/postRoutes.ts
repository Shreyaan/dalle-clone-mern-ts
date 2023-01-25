import express from "express";
import { Router } from "express";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
