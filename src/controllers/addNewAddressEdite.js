import NewAddress from "../models/NewAddress.js"

const EditNewAddress= async(req,res)=>{
    
    try{
 const {id}= req.query
 
  const updatedProduct = await NewAddress.findByIdAndUpdate(
   id,
   req.body, {
    new:true,
   runValidators: true
   }
  )

  if(!updatedProduct){
    return res.status(400).json({
     message: "New Address not found"
    })
  }

   return res.status(200).json({
    message:'New Address updated successfully',
    NewAddress:updatedProduct
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditNewAddress