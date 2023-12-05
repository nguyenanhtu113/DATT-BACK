import mongoose from 'mongoose'
const orderStatus = {
    PENDING:'chờ duyệt',
    PROCESSING:'lấy hàng',
    ONDELIVERY:'đang giao',
    COMPLETED:'giao hàng thành công',
    CANCELLED:'Hủy đơn hàng'
  };
const ordersSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderDate:{
        type:Date,
        default:Date.now
    },
    fullname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:Object.values(orderStatus) ,
        default: orderStatus.PENDING
    },
    address:{
        type:String,
        required:true
    },
    orderTotal:{
        type:Number,
        required:true
    },
    orderDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OderDetail' }],
})
export default mongoose.model('Order',ordersSchema)