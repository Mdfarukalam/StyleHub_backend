import KidProduct from "../../models/AdminModel/KidProduct.js";

const GetKid = async(req,res)=>{
    try{
 const fetchAllKid = await KidProduct.find().sort({_id:-1})
 return res.status(400).json({
       message: "Kid fetched successfully",
      Kid: fetchAllKid
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default GetKid