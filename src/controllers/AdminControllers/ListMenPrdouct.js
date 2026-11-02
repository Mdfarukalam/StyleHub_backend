import MenProduct from "../../models/AdminModel/MenProduct.js";

const ListMenProduct = async(req,res)=>{
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



 const GetMenProdut = await MenProduct.find(filter).sort({_id:-1})
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