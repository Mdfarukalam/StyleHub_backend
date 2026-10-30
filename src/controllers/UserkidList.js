import KidProduct from "../models/AdminModel/KidProduct.js";

const Userkidlist= async(req,res)=>{
    try{
 const GetUser_kid=await KidProduct.find().sort({_id:-1})

  return res.status(200).json({
   message: "Kid Product fetched successfully",
      UserKidProducts: GetUser_kid
 })
    }
    catch(error){
   return res.status(500).json({
      message: "Server error"
    });
    }
}
export default Userkidlist