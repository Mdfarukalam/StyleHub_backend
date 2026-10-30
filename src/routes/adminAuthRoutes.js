
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

export default Adminrouter;
