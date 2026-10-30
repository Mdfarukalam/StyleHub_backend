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

Adminrouter.post("/LoginAdmin", LoginAdmin);
Adminrouter.post("/MenProduct",adminMiddleware,AddMenProduct)
Adminrouter.put("/EditeMenProducts", adminMiddleware, EditeMenProduct);
Adminrouter.delete("/DeletedMenProducts", adminMiddleware, DeletedMenProduct);
Adminrouter.post("/WomenProduct",adminMiddleware,AddWomenProduct)
Adminrouter.put("/EditeWomenProducts",adminMiddleware,EditeWomenProduct)
Adminrouter.delete("/DeleteWomenProducts", adminMiddleware, DeleteWomenProduct);
Adminrouter.post("/AddkidProducts",adminMiddleware,AddkidProduct)
Adminrouter.put("/EditeKidProducts",adminMiddleware,EditeKidProduct)
Adminrouter.delete("/DeleteKidProducts", adminMiddleware, DeleteKidProduct);
Adminrouter.get("/ListMenProducts",adminMiddleware,ListMenProduct)
Adminrouter.get("/GetAllUsers",adminMiddleware,GetAllUser)
Adminrouter.get("/ListWomenProducts",adminMiddleware,ListWomenProduct)
Adminrouter.get("/GetKids",adminMiddleware,GetKid)
Adminrouter.post("/AddTopProducts",adminMiddleware,AddTopProduct)
Adminrouter.put("/EditeTopProducts",adminMiddleware,EditeTopProduct)
Adminrouter.get("/GetTopProducts",adminMiddleware,GetTopProduct)
Adminrouter.delete("/DeletedTopProducts", adminMiddleware,DeletedTopProduct);
Adminrouter.post("/AddArrivalsProducts",adminMiddleware,AddArrivalsProduct)
Adminrouter.put("/EditArrivalsProducts",adminMiddleware,EditArrivalsProduct)
Adminrouter.get("/ListArrivalsProducts",adminMiddleware,ListArrivalsProduct)
Adminrouter.delete("/DeleteArrivalsProducts", adminMiddleware,DeleteArrivalsProduct);

export default Adminrouter;
