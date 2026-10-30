import TopProduct from "../../models/AdminModel/TopProduct.js"
const DeletedTopProduct = async(req,res)=>{
    try{
const {id}= req.query

const TopProductdelete= await TopProduct.findByIdAndDelete(id)
if(!TopProductdelete){
    return res.status(400).json({
   message: "Product not found"
    })
}
return res.status(200).json({
          message: "Top Product deleted successfully",
          TopProducts:TopProductdelete
})
}

   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeletedTopProduct