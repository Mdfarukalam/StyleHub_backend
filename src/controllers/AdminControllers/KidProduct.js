import KidProduct from "../../models/AdminModel/KidProduct.js";
const AddkidProduct = async(req,res)=>{
   
try{
     const {
      name,
      brand,
      category,
      price,
      originalPrice,
      discount,
      description,
      images,
      colors,
      sizes,
      stock,
      rating,
      isActive
    } = req.body; 
 if(!name || !brand || !category || price == null || originalPrice == null || discount == null|| !images|| colors.length === 0 || !sizes.length === 0 || !stock ||!rating){
return res.status(400).json({ message: "All fields are required", })

 }

 
  const CreateWomenProduct= await KidProduct.create({
    name,
    brand,
    category,
    price,
    originalPrice,
    discount,
    images,
    sizes,
    stock,
    rating,
    isActive,
    colors,
    description
  }) 

     return res.status(201).json({
            message: "Kid Product created successfully",
            KidProduct: CreateWomenProduct
        });

}
catch(error){
    return res.status(500).json({
            message: "Server error",
        })
}
}
export default AddkidProduct