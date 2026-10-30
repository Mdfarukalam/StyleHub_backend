 import MenProduct from "../models/AdminModel/MenProduct.js";
 const UserListMenProduct = async(req,res)=>{
     try
     {
  const UserGetMenProdut = await MenProduct.find().sort({_id:-1})
  return res.status(200).json({
         message: "User Men Produts fetched successfully",
     
       UserGetMenProduts:UserGetMenProdut
  })
     }
     catch(error){
     return res.status(500).json({
       message: "Server error"
     });
     }
 }
 export default UserListMenProduct