import User from "../models/User.js";
import bcrypt from "bcryptjs";

 const signup = async (Req, res) => {
    try {
        const { fullName, Email, Password,phoneNumber } = Req.body
        if (!fullName || !Email || !Password || !phoneNumber) {
            return res.status(400).json({ message: "All fields are required", })

        };
        const existingUser = await User.findOne({ Email })
        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered",
            })
        };
// const hashedPassword = await bcrypt.hash(Password, 10);
        const UserCreate = await User.create(
            {
                fullName,
                Email,
                phoneNumber,
                Password
            }
        );
        return res.status(201).json({
            message: "Signup successful",
            User: {
                id: UserCreate.id,
                fullName: UserCreate.fullName,
                Email: UserCreate.Email,
                phoneNumber:UserCreate.phoneNumber,
                Password:UserCreate.Password,
            }
        })
    }
    catch (error) {
        res.status(500).json(
            { message: "Server error", }
        )
    }
}
export default signup
 