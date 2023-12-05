import  express  from "express"
import { CreateOrder, getAllOrder, getOrderDetailByOrderId, getOrdersByUserId, purchase, updateOrderStatus } from "../controllers/orders";
import { validateOrder } from "../middlewares/orders";
const router = express.Router();
router.get("/order",getAllOrder)
router.get("/purchase",purchase)
router.get("/order/:id",getOrderDetailByOrderId)
router.get("/order/:id",getOrdersByUserId)
router.post("/order",CreateOrder)
router.put("/order/:id",updateOrderStatus)
export default router