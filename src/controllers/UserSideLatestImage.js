import LatestImage from "../models/LatestImage.js";

const UserSideLatestImage= async(req,res)=>{
    try{
 
    const fetchLatestImage = await LatestImage.find().sort({
      _id: -1,
    });

 return res.status(200).json({
       message: "Latest image successfully",
      LatestImages: fetchLatestImage
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default UserSideLatestImage