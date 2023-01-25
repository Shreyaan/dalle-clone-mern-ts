import { Router } from "express";
import * as dotenv from "dotenv";
dotenv.config();
const router = Router();
router.get("/", (req, res) => {
    res.send("Hello World!");
});
export default router;
//# sourceMappingURL=postRoutes.js.map