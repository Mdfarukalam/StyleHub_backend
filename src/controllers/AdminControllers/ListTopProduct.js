import TopProduct from "../../models/AdminModel/TopProduct.js";
const GetTopProduct = async(req,res)=>{
    try{
 const fetchAllKid = await TopProduct.find().sort({_id:-1})
 return res.status(400).json({
       message: "Top Product fetched successfully",
      TopProduct: fetchAllKid
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default GetTopProduct