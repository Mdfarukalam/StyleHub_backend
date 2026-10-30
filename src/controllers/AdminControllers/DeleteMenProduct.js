import MenProduct from "../../models/AdminModel/MenProduct.js";

const DeleteMenProduct = async(req,res)=>{
    try{
const {id}= req.query

const DeletedMenProduct= await MenProduct.findByIdAndDelete(id)
if(!DeletedMenProduct){
    return res.status(400).json({
   message: "Product not found"
    })
}
return res.status(200).json({
          message: "Product deleted successfully",
          MenProduct:DeletedMenProduct
})
    }
    catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeleteMenProduct