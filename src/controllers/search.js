import Product from "../models/product"

export const searchProductName = async (req,res)=>{
    const {name}=req.query
    try {
        const searchProduct = await Product.find({name:{$regex:name,$options:"i"}})
        res.json(searchProduct)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"Không tìm được sản phẩm"
        })
        
    }
}