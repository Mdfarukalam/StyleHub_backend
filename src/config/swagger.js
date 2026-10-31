
import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "StyleHub Admin API",
      version: "1.0.0",
      description: "StyleHub Admin Panel API Documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
        url: "https://stylehub-backend-3-pgrs.onrender.com",
        description: "Local Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: [
    path.join(process.cwd(), "src/routes/adminAuthRoutes.js"),
    "./src/routes/authRoutes.js"
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
