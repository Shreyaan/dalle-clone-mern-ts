import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
try {
    connectDb(process.env.MONGODB_URl);
}
catch (err) {
    console.log(err);
}
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
//# sourceMappingURL=index.js.map