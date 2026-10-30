import MenProduct from "../../models/AdminModel/MenProduct.js";

const EditeMenProduct = async(req,res)=>{
    
    try{
 const {id}= req.query
 
  const updatedProduct = await MenProduct.findByIdAndUpdate(
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
    message:'Product updated successfully',
    MenProduct:updatedProduct
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditeMenProduct