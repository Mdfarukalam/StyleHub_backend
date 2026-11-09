import LatestImage from "../../models/LatestImage.js";

const EditeLatestImage = async(req,res)=>{
    
    try{
 const {id}= req.query
 
  const updatedLatestImage = await LatestImage.findByIdAndUpdate(
   id,
   req.body, {
    new:true,
   runValidators: true
   }
  )

  if(!updatedLatestImage){
    return res.status(400).json({
     message: "Latest Image not found"
    })
  }

   return res.status(200).json({
    message:'Latest Image updated successfully',
    LatestImages:updatedLatestImage
   })
}
  catch(error){

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
}
export default EditeLatestImage