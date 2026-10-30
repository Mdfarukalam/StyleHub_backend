import TopProduct from "../../models/AdminModel/TopProduct.js";

const AddTopProduct = async(req,res)=>{
   
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

 
  const CreateMenProduct= await TopProduct.create({
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
            message: "TopProduct created successfully",
            TopProduct: CreateMenProduct
        });

}
catch(error){
    return res.status(500).json({
            message: "Server error",
        })
}
}
export default AddTopProduct