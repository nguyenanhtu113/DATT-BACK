import express  from "express";
import { searchProductName } from "../controllers/search";
const router = express.Router();
router.get("/search",searchProductName)
export default router