 import ArrivalsProduct from "../models/AdminModel/Arrivals.js";

const UserListArrivalsProduct = async(req,res)=>{
    try
    {
 const UserGetArrivalsProdut = await ArrivalsProduct.find().sort({_id:-1})
 return res.status(200).json({
        message: "User Arrivals Produts fetched successfully",
    
      UserGetArrivalsProduts:UserGetArrivalsProdut
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default UserListArrivalsProduct