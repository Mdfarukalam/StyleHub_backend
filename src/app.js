
import express from "express";
import cors from "cors";
import router from "./routes/authRoutes.js";
import Adminrouter from "./routes/adminAuthRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("StyleHub API is running");
});

app.use("/api/auth", router);
app.use("/api/admin", Adminrouter);

export default app;
