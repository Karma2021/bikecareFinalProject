const express = require("express");
const {
    registerAdmin,
    loginAdmin,
} = require("../controller/adminController");

const router = express.Router();

router.post("/adminregister", registerAdmin);

router.post("/adminlogin", loginAdmin);

module.exports = router;