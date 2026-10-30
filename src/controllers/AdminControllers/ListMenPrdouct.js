import MenProduct from "../../models/AdminModel/MenProduct.js";

const ListMenProduct = async(req,res)=>{
    try
    {
 const GetMenProdut = await MenProduct.find().sort({_id:-1})
 return res.status(200).json({
        message: "GetMenProduts fetched successfully",
    
      GetMenProduts:GetMenProdut
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default ListMenProduct