import ArrivalsProduct from "../../models/AdminModel/Arrivals.js"

const EditArrivalsProduct = async(req,res)=>{
    
    try{
 const {id}= req.query
 
  const updatedProduct = await ArrivalsProduct.findByIdAndUpdate(
   id,
   req.body, {
    new:true,
   runValidators: true
   }
  )

  if(!updatedProduct){
    return res.status(400).json({
     message: "Arrivals Product not found"
    })
  }

   return res.status(200).json({
    message:' Arrivals Product updated successfully',
    ArrivalsProduct:updatedProduct
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditArrivalsProduct