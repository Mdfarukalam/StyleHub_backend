import WomenProduct from "../../models/AdminModel/WomenProduct.js";

const ListWomenProduct = async(req,res)=>{
    try{

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

 const GetWomenProduct= await WomenProduct.find(filter).sort({_id:-1})

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