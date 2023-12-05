import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: Number,
    price_sale: Number,
    img: String,
    description: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    }
},
{ timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate)

export default mongoose.model("Product", productSchema);
