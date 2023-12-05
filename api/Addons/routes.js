import { createAddOns, deleteAddOns, getAllAddOns } from "./controllers";

const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

router.get("/", getAllAddOns);
router.post("/", upload.single("image"), createAddOns);
router.delete("/", deleteAddOns);

export default router;
