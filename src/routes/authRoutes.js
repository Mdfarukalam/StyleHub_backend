
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

router.post("/signup", signup);
router.post("/Login", Login);
router.get("/Profile", authMiddleware,Profile);
router.get("/Userkidlists", authMiddleware,Userkidlist);
router.get("/UserWomenlists", authMiddleware,UserWomenlist);
router.get("/UserListMenProducts", authMiddleware,UserListMenProduct);
router.get("/UserGetTopProducts", authMiddleware,UserGetTopProduct);
router.get("/UserListArrivalsProducts", authMiddleware,UserListArrivalsProduct);



export default router;
