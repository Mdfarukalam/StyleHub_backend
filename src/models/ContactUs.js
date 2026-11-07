import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
        email: {
        type: String,
        required: true,
        trim: true,
    },
           subject: {
        type: String,
        required: true,
    
    },
        message: {
      type: String,
      required: true,
      trim: true,
    },
    

},
  {
    timestamps: true,
  }

);
 const ContactUs = mongoose.model('User',ContactUsSchema)
 export default ContactUs    