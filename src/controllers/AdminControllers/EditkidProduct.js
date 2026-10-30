import KidProduct from "../../models/AdminModel/KidProduct.js"
const EditeKidProduct = async(req,res)=>{
    
    try{
 const {id}= req.query
 
  const updatedProduct = await KidProduct.findByIdAndUpdate(
   id,
   req.body, {
    new:true,
   runValidators: true
   }
  )

  if(!updatedProduct){
    return res.status(400).json({
     message: "kid Product not found"
    })
  }

   return res.status(200).json({
    message:' kid Product updated successfully',
    KidProduct:updatedProduct
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditeKidProduct