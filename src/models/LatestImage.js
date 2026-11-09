
import mongoose from "mongoose";

const LatestImageSchema = new mongoose.Schema(
    {
         images: {
            type: String,
            required: true,
        },


 
    },
    { timestamps: true }
);




 

const LatestImage = mongoose.model("LatestImage", LatestImageSchema);

export default LatestImage;
