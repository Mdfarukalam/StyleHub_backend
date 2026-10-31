import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
        Email: {
        type: String,
        required: true,
        trim: true,
    },
           Password: {
        type: String,
        required: true,
    
    },
        phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    

},
  {
    timestamps: true,
  }

);
 const User = mongoose.model('User',UserSchema)
 export default User