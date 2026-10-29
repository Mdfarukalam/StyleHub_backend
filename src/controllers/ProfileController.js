
import User from "../models/User.js";

const Profile = async (req, res) => {
   console.log("User ID:",req.user.id);
 
  try {
    const UserData = await User.findById(req.user.id)
      .select("-Password");

    if (!UserData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile fetched successfully",
      UserData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export default Profile;
