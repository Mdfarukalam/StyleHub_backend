import KidProduct from "../../models/AdminModel/KidProduct.js";

const GetKid = async(req,res)=>{
    try{
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