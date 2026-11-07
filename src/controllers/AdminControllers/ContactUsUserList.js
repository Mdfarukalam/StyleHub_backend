import ContactUs from "../../models/ContactUs.js";

const ContactUsList = async(req,res)=>{
    try{
    const { search } = req.query;

    let filter = {};

    if (search && search.trim()) {
      const searchRegex = new RegExp(
        search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );

      filter = {
        $or: [
          { name: searchRegex },
          { email: searchRegex },
          { subject: searchRegex },
        ],
      };
    }



    const fetchAllKid = await ContactUs.find(filter).sort({
      _id: -1,
    });

 return res.status(200).json({
       message: "Contact Us fetched successfully",
      ContactUs: fetchAllKid
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server errors"
    });
    }
}
export default ContactUsList