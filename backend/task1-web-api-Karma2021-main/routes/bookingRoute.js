const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.post('/bookservice', bookingController.bookService);
router.get('/getallbookings', bookingController.getAllBookings);

module.exports = router;
