 import TopProduct from "../models/AdminModel/TopProduct.js";
 const UserGetTopProduct = async(req,res)=>{
    try{
 const fetchAllKid = await TopProduct.find().sort({_id:-1})
 return res.status(400).json({
       message: "User Top Product fetched successfully",
      UserTopProduct: fetchAllKid
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default UserGetTopProduct