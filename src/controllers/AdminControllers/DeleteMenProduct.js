import MenProduct from "../../models/AdminModel/MenProduct.js";

const DeleteMenProduct = async(req,res)=>{
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
export default DeleteMenProduct