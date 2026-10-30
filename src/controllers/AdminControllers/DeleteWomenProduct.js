import WomenProduct from "../../models/AdminModel/WomenProduct.js"
const DeleteWomenProduct = async(req,res)=>{
const {id}= req.query

const DeletedMenProduct= await WomenProduct.findByIdAndDelete(id)
if(!DeletedMenProduct){
    return res.status(400).json({
   message: "Product not found"
    })
}
return res.status(200).json({
          message: "Women Product deleted successfully",
          WomenProduct:DeletedMenProduct
})

}
export default DeleteWomenProduct