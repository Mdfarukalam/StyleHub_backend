import LatestImage from "../../models/LatestImage.js";
const AddLatestImage = async(req,res)=>{
   
try{
    const {
 
 images
    } = req.body;

   
    if (
 
      !images 
      
    ) {
      return res.status(400).json({
        message: "  fields are required",
      });
    }

 

 

 
  const LatestImagecreate= await LatestImage.create({
 
 images
  }) 

     return res.status(201).json({
            message: "Latest Image created successfully",
            LatestImages: LatestImagecreate
        });

}
catch(error){
    return res.status(500).json({
            message: "Server error",
        })
}
}
export default AddLatestImage