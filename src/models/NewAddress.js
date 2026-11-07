import mongoose from "mongoose";

const NewAddressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
        phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
           addressLine: {
        type: String,
        required: true,
    
    },
        city: {
      type: String,
      required: true,
      trim: true,
    },

        state: {
      type: String,
      required: true,
      trim: true,
    },
    

        pincode: {
      type: String,
      required: true,
      trim: true,
    },
},
  {
    timestamps: true,
  }

);
 const NewAddress = mongoose.model('NewAddress',NewAddressSchema)
 export default NewAddress

 