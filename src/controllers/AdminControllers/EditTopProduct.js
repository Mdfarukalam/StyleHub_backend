import TopProduct from "../../models/AdminModel/TopProduct.js"

const EditeTopProduct = async(req,res)=>{
    
    try{
 const {id}= req.query
 
  const updatedProduct = await TopProduct.findByIdAndUpdate(
   id,
   req.body, {
    new:true,
   runValidators: true
   }
  )

  if(!updatedProduct){
    return res.status(400).json({
     message: "Product not found"
    })
  }

   return res.status(200).json({
    message:'Top Product updated successfully',
    TopProduct:updatedProduct
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditeTopProduct