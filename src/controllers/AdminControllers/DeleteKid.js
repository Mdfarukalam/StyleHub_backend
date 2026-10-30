import KidProduct from "../../models/AdminModel/KidProduct.js"
const DeleteKidProduct = async(req,res)=>{
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
export default DeleteKidProduct