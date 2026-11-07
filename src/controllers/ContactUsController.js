import ContactUs from "../models/ContactUs.js"
 

 const ContactUsUser = async (Req, res) => {
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
            message: "Contact Us successfully",
            User:UserCreate
        })
    }
    catch (error) {
        res.status(500).json(
            { message: "Server errors", }
        )
    }
}
export default ContactUsUser
 