const { v4: uuidv4 } = require('uuid');
const Booking = require('../models/bookingModel');
const Service = require('../models/serviceModel');
const stripe = require('stripe')("sk_test_51NVnWRDG1kTmjXztfRxa4TVaPLy21ojdc2JZtvLUO6PnFc84w7nwffq0Kq5vYjJVEJr1gvcM8dWjPEpTT3sDU0ci00gRbLffO5");

const bookService = async (req, res) => {
    const { token } = req.body;
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create(
            {
                amount: req.body.totalAmount * 100,
                currency: 'NPR',
                customer: customer.id,
                receipt_email: token.email
            },
            {
                idempotencyKey: uuidv4()
            }
        );

        if (payment) {
            req.body.transactionId = payment.source.id;
            const newBooking = new Booking(req.body);
            await newBooking.save();

            // Update the bookedTimeSlots for the service
            const service = await Service.findOne({ _id: req.body.service });
            console.log(req.body.service);
            service.bookedTimeSlots.push(req.body.bookedTimeSlots);
            await service.save();

            res.send('Your booking is successful');
        } else {
            return res.status(400).json({ error: 'Payment failed' });
        }
    } catch (error) {
        console.error('Error during payment:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('service');
        res.send(bookings);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = {
    bookService,
    getAllBookings
};
