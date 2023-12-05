import Joi from "joi";

const voucherSchema = Joi.object({
  Voucher_Code: Joi.string().max(255).required(),
  Discount_Type: Joi.string().max(255).required(),
  Expiration_Date: Joi.date().required(),
  IsActive: Joi.boolean().required(),
  Description: Joi.string().max(1000),
});

export default voucherSchema;
