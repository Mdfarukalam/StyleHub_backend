import KidProduct from "../../models/AdminModel/KidProduct.js";

const GetKid = async(req,res)=>{
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



    const fetchAllKid = await KidProduct.find(filter).sort({
      _id: -1,
    });

 return res.status(200).json({
       message: "Kid fetched successfully",
      Kid: fetchAllKid
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default GetKid