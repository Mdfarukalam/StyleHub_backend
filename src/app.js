 
import express from "express";
import cors from "cors";
import router from "./routes/authRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "StyleHub API",
      version: "1.0.0",
      description: "StyleHub Backend API Documentation",
    },
    servers: [
      {
        url: "https://stylehub-backend-4-x72p.onrender.com",
        description: "Live Server",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/routes/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Home route
app.get("/", (req, res) => {
  res.send("StyleHub API is running");
});

// Auth routes
app.use("/api/auth", router);

export default app;
 