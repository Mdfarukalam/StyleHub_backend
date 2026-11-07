 







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
import AddCart from "../controllers/CartCantroller.js";
import UserCartProduct from "../controllers/CartList.js";
import DeleteCartProductfunction from "../controllers/DeleteList.js";
 import AddWishlist from "../controllers/WishlistController.js";
 import GetWishlist from "../controllers/GetWishlist.js";
 import RemoveWishlist from "../controllers/DeleteWishlist.js";
import ContactUsUser from "../controllers/ContactUsController.js";

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
router.get("/Userkidlists", Userkidlist);


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
router.get("/UserWomenlists", UserWomenlist);


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
router.get("/UserListMenProducts", UserListMenProduct);


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
router.get("/UserGetTopProducts", UserGetTopProduct);


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
router.get("/UserListArrivalsProducts", UserListArrivalsProduct);





/**
 * @swagger
 * /api/auth/AddCarts:
 *   post:
 *     summary: Add product to cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - productType
 *               - color
 *               - discount
 *               - images
 *               - originalPrice
 *               - price
 *               - sizes
 *             properties:
 *               productId:
 *                 type: string
 *               productType:
 *                 type: string
 *                 enum: [men, women, kids, arrivals, topProducts]
 *               color:
 *                 type: string
 *               discount:
 *                 type: number
 *               images:
 *                 type: string
 *               originalPrice:
 *                 type: number
 *               price:
 *                 type: number
 *               sizes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Cart saved successfully
 *       400:
 *         description: All fields are required
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post("/AddCarts", authMiddleware, AddCart);


/**
 * @swagger
 * /api/auth/UserCartProducts:
 *   get:
 *     summary: Get all cart products of logged-in user
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User cart products fetched successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/UserCartProducts", authMiddleware, UserCartProduct);


/**
 * @swagger
 * /api/auth/DeleteCartProducts:
 *   delete:
 *     summary: Delete a product from logged-in user's cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Cart product ID
 *     responses:
 *       200:
 *         description: Cart product deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart product not found
 *       500:
 *         description: Server error
 */
router.delete("/DeleteCartProducts", authMiddleware, DeleteCartProductfunction);


/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Customer Wishlist APIs
 */
 

/**
 * @swagger
 * /api/auth/AddWishlist:
 *   post:
 *     summary: Add product to wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - productType
 *             properties:
 *               productId:
 *                 type: string
 *                 example: "672a12345678901234567890"
 *               productType:
 *                 type: string
 *                 enum: [men, women, kids, top-product, new-arrivals]
 *                 example: men
 *     responses:
 *       201:
 *         description: Product added to wishlist
 *       400:
 *         description: Product already in wishlist
 *       401:
 *         description: Unauthorized
 */
router.post("/AddWishlist", authMiddleware, AddWishlist);

/**
 * @swagger
 * /api/auth/GetWishlist:
 *   get:
 *     summary: Get customer wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Wishlist fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/GetWishlist", authMiddleware, GetWishlist);

/**
 * @swagger
 * /api/auth/RemoveWishlist:
 *   delete:
 *     summary: Remove product from wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - productType
 *             properties:
 *               productId:
 *                 type: string
 *                 example: "672a12345678901234567890"
 *               productType:
 *                 type: string
 *                 enum: [men, women, kids, top-product, new-arrivals]
 *                 example: men
 *     responses:
 *       200:
 *         description: Product removed from wishlist
 *       404:
 *         description: Product not found in wishlist
 *       401:
 *         description: Unauthorized
 */
 
router.delete("/RemoveWishlist", authMiddleware, RemoveWishlist);

/**
 * @swagger
 * tags:
 *   name: Contact Us
 *   description: Customer Contact APIs
 */

/**
 * @swagger
 * /api/auth/ContactUsUsersadd:
 *   post:
 *     summary: Submit contact message
 *     tags: [Contact Us]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - subject
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: MD Faruk
 *               email:
 *                 type: string
 *                 example: faruk@gmail.com
 *               subject:
 *                 type: string
 *                 example: Order related query
 *               message:
 *                 type: string
 *                 example: I need help with my order.
 *     responses:
 *       201:
 *         description: Contact message submitted successfully
 *       400:
 *         description: All fields are required
 *       500:
 *         description: Server error
 */
 
 router.post("/ContactUsUsersadd", authMiddleware, ContactUsUser);
export default router;

