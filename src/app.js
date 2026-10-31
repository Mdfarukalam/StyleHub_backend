
import express from "express";
import cors from "cors";
import router from "./routes/authRoutes.js";
import Adminrouter from "./routes/adminAuthRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("StyleHub API is running");
});

app.use("/api/auth", router);
app.use("/api/admin", Adminrouter);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
    customCss: `
      .swagger-ui section.models {
        display: none !important;
      }
    `,
  })
);
export default app;
