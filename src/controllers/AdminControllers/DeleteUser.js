 import User from "../../models/User.js"
const DeletedUser = async(req,res)=>{
    try{
const {id}= req.query

const Userdelete= await User.findByIdAndDelete(id)
if(!Userdelete){
    return res.status(400).json({
   message: "User not found"
    })
}
return res.status(200).json({
          message: "User deleted successfully",
          TopProducts:Userdelete
})
}

   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeletedUser