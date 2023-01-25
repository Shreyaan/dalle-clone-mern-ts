import express from "express";
import { Router } from "express";

import { Configuration, OpenAIApi } from "openai";


const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
