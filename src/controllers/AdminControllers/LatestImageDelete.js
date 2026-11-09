import LatestImage from "../../models/LatestImage.js";
const DeletedLatestImage = async(req,res)=>{
    try{
const {id}= req.query

const LatestImagedelete= await User.LatestImage(id)
if(!LatestImagedelete){
    return res.status(400).json({
   message: "Latest Image not found"
    })
}
return res.status(200).json({
          message: "Latest Image deleted successfully",
          LatestImages:LatestImagedelete
})
}

   catch(error){
           return res.status(500).json({
            message: "Server error",
        })  
    }
}
export default DeletedLatestImage