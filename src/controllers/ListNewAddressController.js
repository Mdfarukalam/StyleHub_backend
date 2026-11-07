import NewAddress from "../models/NewAddress.js";

 




 

 const listContactUsUsers = async(req,res)=>{
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
          { fullName: searchRegex },
          { phoneNumber: searchRegex },
          { city: searchRegex },
        ],
      };
    }
  const UserGetMenProdut = await NewAddress.find(filter).sort({_id:-1})
  return res.status(200).json({
         message: "New Address fetched successfully",
     
       NewAddresslist:UserGetMenProdut
  })
     }
     catch(error){
     return res.status(500).json({
       message: "Server error"
     });
     }
 }

export default listContactUsUsers;