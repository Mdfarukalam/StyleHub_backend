 






import express from "express";

import LoginAdmin from "../controllers/AdminControllers/AdminAuthController.js";
import AddMenProduct from "../controllers/AdminControllers/MenProductcontrollers.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import EditeMenProduct from "../controllers/AdminControllers/EditMenProduct.js";
import DeletedMenProduct from "../controllers/AdminControllers/DeleteMenProduct.js";

import AddWomenProduct from "../controllers/AdminControllers/WommenProduct.js";
import EditeWomenProduct from "../controllers/AdminControllers/EditWomenProduct.js";
import DeleteWomenProduct from "../controllers/AdminControllers/DeleteWomenProduct.js";

import AddkidProduct from "../controllers/AdminControllers/KidProduct.js";
import EditeKidProduct from "../controllers/AdminControllers/EditkidProduct.js";
import DeleteKidProduct from "../controllers/AdminControllers/DeleteKid.js";

import GetAllUser from "../controllers/AdminControllers/UserController.js";
import ListMenProduct from "../controllers/AdminControllers/ListMenPrdouct.js";
import ListWomenProduct from "../controllers/AdminControllers/ListWomenProduct.js";
import GetKid from "../controllers/AdminControllers/ListKid.js";

import AddTopProduct from "../controllers/AdminControllers/TopProducts.js";
import EditeTopProduct from "../controllers/AdminControllers/EditTopProduct.js";
import GetTopProduct from "../controllers/AdminControllers/ListTopProduct.js";
import DeletedTopProduct from "../controllers/AdminControllers/DeleteTopProduct.js";

import AddArrivalsProduct from "../controllers/AdminControllers/ArrivalsProduct.js";
import EditArrivalsProduct from "../controllers/AdminControllers/EditArrivalsProduct.js";
import ListArrivalsProduct from "../controllers/AdminControllers/ListArrivalsProduct.js";
import DeleteArrivalsProduct from "../controllers/AdminControllers/DeleteArrivalsProduct.js";

const Adminrouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Slim Fit Jeans
 *         brand:
 *           type: string
 *           example: Roadster
 *         category:
 *           type: string
 *           example: Jeans
 *         price:
 *           type: number
 *           example: 999
 *         originalPrice:
 *           type: number
 *           example: 1499
 *         discount:
 *           type: number
 *           example: 33
 *         description:
 *           type: string
 *           example: Comfortable slim fit jeans
 *         images:
 *           type: string
 *           example: https://example.com/jeans.jpg
 *         colors:
 *           type: array
 *           items:
 *             type: string
 *           example: [Blue, Black]
 *         sizes:
 *           type: array
 *           items:
 *             type: string
 *           example: [S, M, L, XL]
 *         stock:
 *           type: number
 *           example: 50
 *         rating:
 *           type: number
 *           example: 4.5
 *         isActive:
 *           type: boolean
 *           example: true
 *
 *     ProductUpdate:
 *       allOf:
 *         - $ref: '#/components/schemas/Product'
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 *               example: 671a12345678901234567890
 *
 *     DeleteProduct:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           example: 671a12345678901234567890
 *
 *     AdminLogin:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           example: admin@gmail.com
 *         Password:
 *           type: string
 *           example: Admin@123
 */

/**
 * @swagger
 * tags:
 *   - name: Admin Authentication
 *     description: Admin login APIs
 *   - name: Men Products
 *     description: Men product management
 *   - name: Women Products
 *     description: Women product management
 *   - name: Kids Products
 *     description: Kids product management
 *   - name: Users
 *     description: Customer user management
 *   - name: Top Products
 *     description: Top products management
 *   - name: New Arrivals
 *     description: New arrivals management
 */

/**
 * @swagger
 * /api/admin/LoginAdmin:
 *   post:
 *     summary: Admin Login
 *     tags: [Admin Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminLogin'
 *     responses:
 *       200:
 *         description: Admin login successful
 *       401:
 *         description: Invalid email or password
 */
Adminrouter.post("/LoginAdmin", LoginAdmin);


/* ================= MEN PRODUCTS ================= */

/**
 * @swagger
 * /api/admin/MenProduct:
 *   post:
 *     summary: Add Men Product
 *     tags: [Men Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Men product added successfully
 *       401:
 *         description: Unauthorized
 */
Adminrouter.post("/MenProduct", adminMiddleware, AddMenProduct);

/**
 * @swagger
 * /api/admin/EditeMenProducts:
 *   put:
 *     summary: Edit Men Product
 *     tags: [Men Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: Men product updated successfully
 *       404:
 *         description: Product not found
 */
Adminrouter.put("/EditeMenProducts", adminMiddleware, EditeMenProduct);

/**
 * @swagger
 * /api/admin/DeletedMenProducts:
 *   delete:
 *     summary: Delete Men Product
 *     tags: [Men Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteProduct'
 *     responses:
 *       200:
 *         description: Men product deleted successfully
 *       404:
 *         description: Product not found
 */
Adminrouter.delete("/DeletedMenProducts", adminMiddleware, DeletedMenProduct);

/**
 * @swagger
 * /api/admin/ListMenProducts:
 *   get:
 *     summary: Get All Men Products
 *     tags: [Men Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Men products fetched successfully
 *       401:
 *         description: Unauthorized
 */
Adminrouter.get("/ListMenProducts", adminMiddleware, ListMenProduct);


/* ================= WOMEN PRODUCTS ================= */

/**
 * @swagger
 * /api/admin/WomenProduct:
 *   post:
 *     summary: Add Women Product
 *     tags: [Women Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Women product added successfully
 *       401:
 *         description: Unauthorized
 */
Adminrouter.post("/WomenProduct", adminMiddleware, AddWomenProduct);

/**
 * @swagger
 * /api/admin/EditeWomenProducts:
 *   put:
 *     summary: Edit Women Product
 *     tags: [Women Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: Women product updated successfully
 *       404:
 *         description: Product not found
 */
Adminrouter.put("/EditeWomenProducts", adminMiddleware, EditeWomenProduct);

/**
 * @swagger
 * /api/admin/DeleteWomenProducts:
 *   delete:
 *     summary: Delete Women Product
 *     tags: [Women Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteProduct'
 *     responses:
 *       200:
 *         description: Women product deleted successfully
 *       404:
 *         description: Product not found
 */
Adminrouter.delete("/DeleteWomenProducts", adminMiddleware, DeleteWomenProduct);

/**
 * @swagger
 * /api/admin/ListWomenProducts:
 *   get:
 *     summary: Get All Women Products
 *     tags: [Women Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Women products fetched successfully
 */
Adminrouter.get("/ListWomenProducts", adminMiddleware, ListWomenProduct);


/* ================= KIDS PRODUCTS ================= */

/**
 * @swagger
 * /api/admin/AddkidProducts:
 *   post:
 *     summary: Add Kids Product
 *     tags: [Kids Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Kids product added successfully
 */
Adminrouter.post("/AddkidProducts", adminMiddleware, AddkidProduct);

/**
 * @swagger
 * /api/admin/EditeKidProducts:
 *   put:
 *     summary: Edit Kids Product
 *     tags: [Kids Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: Kids product updated successfully
 *       404:
 *         description: Product not found
 */
Adminrouter.put("/EditeKidProducts", adminMiddleware, EditeKidProduct);

/**
 * @swagger
 * /api/admin/DeleteKidProducts:
 *   delete:
 *     summary: Delete Kids Product
 *     tags: [Kids Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteProduct'
 *     responses:
 *       200:
 *         description: Kids product deleted successfully
 *       404:
 *         description: Product not found
 */
Adminrouter.delete("/DeleteKidProducts", adminMiddleware, DeleteKidProduct);

/**
 * @swagger
 * /api/admin/GetKids:
 *   get:
 *     summary: Get All Kids Products
 *     tags: [Kids Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kids products fetched successfully
 */
Adminrouter.get("/GetKids", adminMiddleware, GetKid);


/* ================= USERS ================= */

/**
 * @swagger
 * /api/admin/GetAllUsers:
 *   get:
 *     summary: Get All Registered Users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All users fetched successfully
 *       401:
 *         description: Unauthorized
 */
Adminrouter.get("/GetAllUsers", adminMiddleware, GetAllUser);


/* ================= TOP PRODUCTS ================= */

/**
 * @swagger
 * /api/admin/AddTopProducts:
 *   post:
 *     summary: Add Top Product
 *     tags: [Top Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Top product added successfully
 */
Adminrouter.post("/AddTopProducts", adminMiddleware, AddTopProduct);

/**
 * @swagger
 * /api/admin/EditeTopProducts:
 *   put:
 *     summary: Edit Top Product
 *     tags: [Top Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: Top product updated successfully
 */
Adminrouter.put("/EditeTopProducts", adminMiddleware, EditeTopProduct);

/**
 * @swagger
 * /api/admin/GetTopProducts:
 *   get:
 *     summary: Get All Top Products
 *     tags: [Top Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Top products fetched successfully
 */
Adminrouter.get("/GetTopProducts", adminMiddleware, GetTopProduct);

/**
 * @swagger
 * /api/admin/DeletedTopProducts:
 *   delete:
 *     summary: Delete Top Product
 *     tags: [Top Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteProduct'
 *     responses:
 *       200:
 *         description: Top product deleted successfully
 */
Adminrouter.delete("/DeletedTopProducts", adminMiddleware, DeletedTopProduct);


/* ================= NEW ARRIVALS ================= */

/**
 * @swagger
 * /api/admin/AddArrivalsProducts:
 *   post:
 *     summary: Add New Arrival Product
 *     tags: [New Arrivals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: New arrival added successfully
 */
Adminrouter.post("/AddArrivalsProducts", adminMiddleware, AddArrivalsProduct);

/**
 * @swagger
 * /api/admin/EditArrivalsProducts:
 *   put:
 *     summary: Edit New Arrival Product
 *     tags: [New Arrivals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: New arrival updated successfully
 */
Adminrouter.put("/EditArrivalsProducts", adminMiddleware, EditArrivalsProduct);

/**
 * @swagger
 * /api/admin/ListArrivalsProducts:
 *   get:
 *     summary: Get All New Arrivals
 *     tags: [New Arrivals]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: New arrivals fetched successfully
 */
Adminrouter.get("/ListArrivalsProducts", adminMiddleware, ListArrivalsProduct);

/**
 * @swagger
 * /api/admin/DeleteArrivalsProducts:
 *   delete:
 *     summary: Delete New Arrival Product
 *     tags: [New Arrivals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteProduct'
 *     responses:
 *       200:
 *         description: New arrival deleted successfully
 */
Adminrouter.delete("/DeleteArrivalsProducts", adminMiddleware, DeleteArrivalsProduct);

export default Adminrouter;








// import express from "express";
// import LoginAdmin from "../controllers/AdminControllers/AdminAuthController.js";
// import AddMenProduct from "../controllers/AdminControllers/MenProductcontrollers.js";
// import adminMiddleware from "../middleware/adminMiddleware.js";
// import EditeMenProduct from "../controllers/AdminControllers/EditMenProduct.js";
// import DeletedMenProduct from "../controllers/AdminControllers/DeleteMenProduct.js";
// import AddWomenProduct from "../controllers/AdminControllers/WommenProduct.js";
// import EditeWomenProduct from "../controllers/AdminControllers/EditWomenProduct.js";
// import DeleteWomenProduct from "../controllers/AdminControllers/DeleteWomenProduct.js";
// import AddkidProduct from "../controllers/AdminControllers/KidProduct.js";
// import EditeKidProduct from "../controllers/AdminControllers/EditkidProduct.js";
// import DeleteKidProduct from "../controllers/AdminControllers/DeleteKid.js";
// import GetAllUser from "../controllers/AdminControllers/UserController.js";
// import ListMenProduct from "../controllers/AdminControllers/ListMenPrdouct.js";
// import ListWomenProduct from "../controllers/AdminControllers/ListWomenProduct.js";
// import GetKid from "../controllers/AdminControllers/ListKid.js";
// import AddTopProduct from "../controllers/AdminControllers/TopProducts.js";
// import EditeTopProduct from "../controllers/AdminControllers/EditTopProduct.js";
// import GetTopProduct from "../controllers/AdminControllers/ListTopProduct.js";
// import DeletedTopProduct from "../controllers/AdminControllers/DeleteTopProduct.js";
// import AddArrivalsProduct from "../controllers/AdminControllers/ArrivalsProduct.js";
// import EditArrivalsProduct from "../controllers/AdminControllers/EditArrivalsProduct.js";
// import ListArrivalsProduct from "../controllers/AdminControllers/ListArrivalsProduct.js";
// import DeleteArrivalsProduct from "../controllers/AdminControllers/DeleteArrivalsProduct.js";
// const Adminrouter = express.Router();

// Adminrouter.post("/LoginAdmin", LoginAdmin);
// Adminrouter.post("/MenProduct",adminMiddleware,AddMenProduct)
// Adminrouter.put("/EditeMenProducts", adminMiddleware, EditeMenProduct);
// Adminrouter.delete("/DeletedMenProducts", adminMiddleware, DeletedMenProduct);
// Adminrouter.post("/WomenProduct",adminMiddleware,AddWomenProduct)
// Adminrouter.put("/EditeWomenProducts",adminMiddleware,EditeWomenProduct)
// Adminrouter.delete("/DeleteWomenProducts", adminMiddleware, DeleteWomenProduct);
// Adminrouter.post("/AddkidProducts",adminMiddleware,AddkidProduct)
// Adminrouter.put("/EditeKidProducts",adminMiddleware,EditeKidProduct)
// Adminrouter.delete("/DeleteKidProducts", adminMiddleware, DeleteKidProduct);
// Adminrouter.get("/ListMenProducts",adminMiddleware,ListMenProduct)
// Adminrouter.get("/GetAllUsers",adminMiddleware,GetAllUser)
// Adminrouter.get("/ListWomenProducts",adminMiddleware,ListWomenProduct)
// Adminrouter.get("/GetKids",adminMiddleware,GetKid)
// Adminrouter.post("/AddTopProducts",adminMiddleware,AddTopProduct)
// Adminrouter.put("/EditeTopProducts",adminMiddleware,EditeTopProduct)
// Adminrouter.get("/GetTopProducts",adminMiddleware,GetTopProduct)
// Adminrouter.delete("/DeletedTopProducts", adminMiddleware,DeletedTopProduct);
// Adminrouter.post("/AddArrivalsProducts",adminMiddleware,AddArrivalsProduct)
// Adminrouter.put("/EditArrivalsProducts",adminMiddleware,EditArrivalsProduct)
// Adminrouter.get("/ListArrivalsProducts",adminMiddleware,ListArrivalsProduct)
// Adminrouter.delete("/DeleteArrivalsProducts", adminMiddleware,DeleteArrivalsProduct);

// export default Adminrouter;


