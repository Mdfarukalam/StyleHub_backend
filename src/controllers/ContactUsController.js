import ContactUs from "../models/ContactUs"
 

 const signup = async (Req, res) => {
    try {
        const { name, email, subject,message } = Req.body
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required", })

        };
        const existingUser = await ContactUs.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered",
            })
        };
 
        const UserCreate = await ContactUs.create(
            {
                name,
                email,
                subject,
                message
            }
        );
        return res.status(201).json({
            message: "Signup successful",
            User:UserCreate
        })
    }
    catch (error) {
        res.status(500).json(
            { message: "Server error", }
        )
    }
}
export default signup
 