import User from "../../models/User.js";

const GetAllUser= async(req,res)=>{
try{
const users = await User.find().sort({_id:-1})
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