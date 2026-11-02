import TopProduct from "../../models/AdminModel/TopProduct.js";
const GetTopProduct = async(req,res)=>{
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


 const fetchAllKid = await TopProduct.find(filter).sort({_id:-1})
 return res.status(200).json({
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