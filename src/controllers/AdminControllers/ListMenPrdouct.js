import MenProduct from "../../models/AdminModel/MenProduct.js";

const ListMenProduct = async(req,res)=>{
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