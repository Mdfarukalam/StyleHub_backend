 import ArrivalsProduct from "../../models/AdminModel/Arrivals.js"
 
 const DeleteArrivalsProduct = async(req,res)=>{
    try{
const {id}= req.query

const DeletedArrivalsProduct= await ArrivalsProduct.findByIdAndDelete(id)
if(!DeletedArrivalsProduct){
    return res.status(400).json({
   message: "Arrivals Product not found"
    })
}
return res.status(200).json({
          message: "Arrivals Product deleted successfully",
          ArrivalsProduct:DeletedArrivalsProduct
})
    }
   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeleteArrivalsProduct