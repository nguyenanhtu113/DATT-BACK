import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import commentRouter from "./routers/comment";
import categoryRouter from "./routers/category";
import productRouter from "./routers/product";
import voucherRouter from "./routers/voucher";
import colorRouter from "./routers/color";
import sizeRouter from "./routers/size";
import cartRouter from "./routers/cart";
import oderDetailRouter from "./routers/Oder_detail";
import productSizeRouter from "./routers/product_size";
import router from "./routers/users";
import orderRouter from './routers/orders'
import searchRouter from './routers/search'
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", commentRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", voucherRouter);
app.use("/api", colorRouter);
app.use("/api", sizeRouter);
app.use("/api", cartRouter);
app.use("/api", oderDetailRouter);
app.use("/api", productSizeRouter);
app.use("/api", router)
app.use('/api',orderRouter)
app.use('/api',searchRouter)
// mongoose.connect("mongodb://127.0.0.1:27017/DATN_WD55");
mongoose.connect("mongodb+srv://phamvanduy15012003:vanduy2003@duantotnghiep.lcazero.mongodb.net/DuAn?retryWrites=true&w=majority");
export const viteNodeApp = app;
