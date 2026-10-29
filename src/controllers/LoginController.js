import User from "../models/User.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        if (!Email || !Password) {
            return res.status(400).json({
                message: "All fields are required",
            })
        };
        const RegisterUser = await User.findOne({ Email })
        console.log(RegisterUser,"RegisterUser")
        if (!RegisterUser) {
            return res.status(400).json({
                message: "User not registered",

            })

        }

        const matchpassword = await bcrypt.compare(Password, RegisterUser.Password)
        if (!matchpassword) {
            return res.status(400).json({
                message: "Invalid password",
            })
        }
    
        const token = jwt.sign(
            { id: RegisterUser._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        );


        return res.status(201).json({
            message: "Login successful",
              token: token,
        })

    }
    catch (error) {
        res.status(500).json(
            { message: "Server error", }
        )
    }
}
export default Login