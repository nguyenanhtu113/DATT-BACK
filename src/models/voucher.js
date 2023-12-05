import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
  Voucher_Code: {
    type: String,
    required: true,
    maxlength: 255,
  },
  Discount_Type: {
    type: String,
    required: true,
    maxlength: 255,
  },
  Expiration_Date: {
    type: Date,
    required: true,
  },
  IsActive: {
    type: Boolean,
    required: true,
  },
  Description: {
    type: String,
    maxlength: 1000,
  },
});

const Voucher = mongoose.model("Voucher", voucherSchema);

export default Voucher;
