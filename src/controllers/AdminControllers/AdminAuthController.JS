import jwt from "jsonwebtoken";
const LoginAdmin = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        if (!Email || !Password) {
            return res.status(400).json({ message: "All fields are required", })
        }

        if (Email === 'admin@gmail.com' && Password === 'qwerty') {

              const token = jwt.sign(
                { role: "admin" },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
            return res.status(200).json({
                message: "Login successfully",
                token:token
            })
        }


     return res.status(401).json({
     message: "Invalid Email or Password"
            })

    }
    catch (error) {
        return res.status(500).json({
            message: "Server error",
        })
    }
}
export default LoginAdmin