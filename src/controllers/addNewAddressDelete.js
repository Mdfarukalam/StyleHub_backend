import NewAddress from "../models/NewAddress.js"
const DeleteNewAddress = async(req,res)=>{
    try{
const {id}= req.query

const DeletedAddress= await NewAddress.findByIdAndDelete(id)
if(!DeletedAddress){
    return res.status(400).json({
   message: "NewAddress not found"
    })
}
return res.status(200).json({
          message: "NewAddress deleted successfully",
          NewAddressdelete:DeletedAddress
})
    }
   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeleteNewAddress