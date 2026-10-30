import WomenProduct from "../../models/AdminModel/WomenProduct.js";

const ListWomenProduct = async(req,res)=>{
    try{
 const GetWomenProduct= await WomenProduct.find().sort({_id:-1})

 return res.status(200).json({
   message: "Women Product fetched successfully",
      GetWomenProducts: GetWomenProduct
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default ListWomenProduct