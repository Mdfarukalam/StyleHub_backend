import ArrivalsProduct from "../../models/AdminModel/Arrivals.js";
const ListArrivalsProduct = async(req,res)=>{
    try
    {

                        const {name, brand, category }= req.query
let filter={};

    const searchConditions = [];
    if (name) {
      searchConditions.push({
        name: { $regex: name, $options: "i" },
      });
    }

    if (brand) {
      searchConditions.push({
        brand: { $regex: brand, $options: "i" },
      });
    }

    if (category) {
      searchConditions.push({
        category: { $regex: category, $options: "i" },
      });
    }

    if (searchConditions.length) {
      filter = { $and: searchConditions };
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