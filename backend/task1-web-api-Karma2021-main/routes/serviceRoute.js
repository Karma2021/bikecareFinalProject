const express = require("express");
const router = express.Router();
const {
  addService,
  getAllServices,
  deleteAllServices,
  editService,
  updateService,
  deleteServiceById,
  deleteService,
} = require("../controller/serviceController");

router.get("/getallservices", getAllServices);

router.post("/addservice", addService);
router.delete("/deleteallservices", deleteAllServices);
router.post("/editservice", editService);
router.put("/updateservice/:id", updateService);
router.delete("/deleteservice/:id", deleteServiceById);
router.post("/deleteservice", deleteService);

module.exports = router;
