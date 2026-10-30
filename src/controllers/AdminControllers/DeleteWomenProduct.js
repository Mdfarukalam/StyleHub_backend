import WomenProduct from "../../models/AdminModel/WomenProduct.js"
const DeleteWomenProduct = async(req,res)=>{
    try{
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
     catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }


}
export default DeleteWomenProduct