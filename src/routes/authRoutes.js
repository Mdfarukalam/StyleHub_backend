
// import express from "express";
// import signup from "../controllers/authController.js";
// import Login from "../controllers/LoginController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import Profile from "../controllers/ProfileController.js";
// import Userkidlist from "../controllers/UserkidList.js";
// import UserWomenlist from "../controllers/UserWomenList.js";
// import UserListMenProduct from "../controllers/UserMen.js";
// import UserGetTopProduct from "../controllers/UserTopProduct.js";
// import UserListArrivalsProduct from "../controllers/UserArrivals.js";
// const router = express.Router();

// router.post("/signup", signup);
// router.post("/Login", Login);
// router.get("/Profile", authMiddleware,Profile);
// router.get("/Userkidlists", authMiddleware,Userkidlist);
// router.get("/UserWomenlists", authMiddleware,UserWomenlist);
// router.get("/UserListMenProducts", authMiddleware,UserListMenProduct);
// router.get("/UserGetTopProducts", authMiddleware,UserGetTopProduct);
// router.get("/UserListArrivalsProducts", authMiddleware,UserListArrivalsProduct);



// export default router;







import express from "express";

import signup from "../controllers/authController.js";
import Login from "../controllers/LoginController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import Profile from "../controllers/ProfileController.js";

import Userkidlist from "../controllers/UserkidList.js";
import UserWomenlist from "../controllers/UserWomenList.js";
import UserListMenProduct from "../controllers/UserMen.js";
import UserGetTopProduct from "../controllers/UserTopProduct.js";
import UserListArrivalsProduct from "../controllers/UserArrivals.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: User Authentication
 *     description: User signup and login
 *   - name: User Profile
 *     description: User profile APIs
 *   - name: User Products
 *     description: Customer product listing APIs
 *
 * components:
 *   schemas:
 *     UserSignup:
 *       type: object
 *       required:
 *         - fullName
 *         - Email
 *         - Password
 *       properties:
 *         fullName:
 *           type: string
 *           example: Faruk
 *         Email:
 *           type: string
 *           example: user@gmail.com
 *         Password:
 *           type: string
 *           example: User@123
 *
 *     UserLogin:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           example: user@gmail.com
 *         Password:
 *           type: string
 *           example: User@123
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register new user
 *     tags: [User Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid user data
 */
router.post("/signup", signup);


/**
 * @swagger
 * /api/auth/Login:
 *   post:
 *     summary: User Login
 *     tags: [User Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid email or password
 */
router.post("/Login", Login);


/**
 * @swagger
 * /api/auth/Profile:
 *   get:
 *     summary: Get logged-in user profile
 *     tags: [User Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/Profile", authMiddleware, Profile);


/**
 * @swagger
 * /api/auth/Userkidlists:
 *   get:
 *     summary: Get Kids Products
 *     tags: [User Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kids products fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/Userkidlists", authMiddleware, Userkidlist);


/**
 * @swagger
 * /api/auth/UserWomenlists:
 *   get:
 *     summary: Get Women Products
 *     tags: [User Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Women products fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/UserWomenlists", authMiddleware, UserWomenlist);


/**
 * @swagger
 * /api/auth/UserListMenProducts:
 *   get:
 *     summary: Get Men Products
 *     tags: [User Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Men products fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/UserListMenProducts", authMiddleware, UserListMenProduct);


/**
 * @swagger
 * /api/auth/UserGetTopProducts:
 *   get:
 *     summary: Get Top Products
 *     tags: [User Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Top products fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/UserGetTopProducts", authMiddleware, UserGetTopProduct);


/**
 * @swagger
 * /api/auth/UserListArrivalsProducts:
 *   get:
 *     summary: Get New Arrivals Products
 *     tags: [User Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: New arrivals fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/UserListArrivalsProducts", authMiddleware, UserListArrivalsProduct);

export default router;

