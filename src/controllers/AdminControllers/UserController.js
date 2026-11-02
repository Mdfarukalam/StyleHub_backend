import User from "../../models/User.js";

const GetAllUser= async(req,res)=>{
try{
 

                        const {fullName, Email, phoneNumber }= req.query
let filter={};

    const searchConditions = [];
    if (fullName) {
      searchConditions.push({
        fullName: { $regex: fullName, $options: "i" },
      });
    }

    if (Email) {
      searchConditions.push({
        Email: { $regex: Email, $options: "i" },
      });
    }

    if (phoneNumber) {
      searchConditions.push({
        phoneNumber: { $regex: phoneNumber, $options: "i" },
      });
    }

    if (searchConditions.length) {
      filter = { $and: searchConditions };
    }
const users = await User.find(filter).sort({_id:-1})
return res.status(200).json({
     message: "Users fetched successfully",
     TotalUser:users.length,
     User:users
})
}
catch(error){
return res.status(500).json({
       message: "Server error"  
})
}
}
export default GetAllUser