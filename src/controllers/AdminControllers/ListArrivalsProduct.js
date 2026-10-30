import ArrivalsProduct from "../../models/AdminModel/Arrivals.js";
const ListArrivalsProduct = async(req,res)=>{
    try
    {
 const GetArrivalsProdut = await ArrivalsProduct.find().sort({_id:-1})
 return res.status(200).json({
        message: "Arrivals Produts fetched successfully",
    
      GetArrivalsProduts:GetArrivalsProdut
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default ListArrivalsProduct