import NewAddress from "../models/NewAddress.js";

  const addNewAddress = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      addressLine,
      city,
      state,
      pincode,
    } = req.body;

    if (
      !fullName ||
      !phoneNumber ||
      !addressLine ||
      !city ||
      !state ||
      !pincode
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const AddressCreate = await NewAddress.create({
      fullName,
      phoneNumber,
      addressLine,
      city,
      state,
      pincode,
    });

    return res.status(201).json({
      success: true,
      message: "Address added successfully",
      address: AddressCreate,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export default addNewAddress;
