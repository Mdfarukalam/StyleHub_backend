import WomenProduct from "../../models/AdminModel/WomenProduct.js"
const EditeWomenProduct = async(req,res)=>{
     console.log('first',req.query.id)
    try{
 const {id}= req.query
 
  const updatedProduct = await WomenProduct.findByIdAndUpdate(
   id,
   req.body, {
    new:true,
   runValidators: true
   }
  )

  if(!updatedProduct){
    return res.status(400).json({
     message: "Women Product not found"
    })
  }

   return res.status(200).json({
    message:'Women Product updated successfully',
    WomenProduct:updatedProduct
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditeWomenProduct