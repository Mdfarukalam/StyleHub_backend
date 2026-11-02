import ArrivalsProduct from "../../models/AdminModel/Arrivals.js";
const ListArrivalsProduct = async(req,res)=>{
    try
    {

    const { search } = req.query;

    let filter = {};

    if (search && search.trim()) {
      const searchRegex = new RegExp(
        search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );

      filter = {
        $or: [
          { name: searchRegex },
          { brand: searchRegex },
          { category: searchRegex },
        ],
      };
    }

 const GetArrivalsProdut = await ArrivalsProduct.find(filter).sort({_id:-1})
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