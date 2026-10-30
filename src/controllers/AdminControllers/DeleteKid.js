import KidProduct from "../../models/AdminModel/KidProduct.js"
const DeleteKidProduct = async(req,res)=>{
    try{
const {id}= req.query

const DeletedMenProduct= await KidProduct.findByIdAndDelete(id)
if(!DeletedMenProduct){
    return res.status(400).json({
   message: "Kid Product not found"
    })
}
return res.status(200).json({
          message: "Kid Product deleted successfully",
          KidProduct:DeletedMenProduct
})
    }
   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeleteKidProduct