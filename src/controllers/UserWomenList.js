 import MenProduct from "../models/AdminModel/MenProduct.js";
 
 const UserMenlist= async(req,res)=>{
    try{
 const GetUser_Men=await MenProduct.find().sort({_id:-1})

  return res.status(200).json({
   message: "Men Product fetched successfully",
      UserMenProducts: GetUser_Men
 })
    }
    catch(error){
   return res.status(500).json({
      message: "Server error"
    });
    }
}
export default UserMenlist