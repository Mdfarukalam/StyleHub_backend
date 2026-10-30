import mongoose from "mongoose";

const adminloginSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        trim: true
    },
    Password: {
        type: String,
        required: true,
    }
})

const adminlogin= mongoose.model('admin',adminloginSchema)
export default adminlogin