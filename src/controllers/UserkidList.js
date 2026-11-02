import KidProduct from "../models/AdminModel/KidProduct.js";

const Userkidlist= async(req,res)=>{
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
 const GetUser_kid=await KidProduct.find(filter).sort({_id:-1})

  return res.status(200).json({
   message: "Kid Product fetched successfully",
      UserKidProducts: GetUser_kid
 })
    }
    catch(error){
   return res.status(500).json({
      message: "Server error"
    });
    }
}
export default Userkidlist