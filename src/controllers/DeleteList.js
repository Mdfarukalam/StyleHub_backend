import Cart from "../models/Cart"
const DeleteCartProductfunction = async(req,res)=>{
    try{
const {id}= req.query

const DeleteCartProduct= await Cart.findByIdAndDelete(id)
if(!DeleteCartProduct){
    return res.status(400).json({
   message: "Cart Product not found"
    })
}
return res.status(200).json({
          message: "Cart Product deleted successfully",
          CartProduct:DeleteCartProduct
})
    }
   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeleteCartProductfunction