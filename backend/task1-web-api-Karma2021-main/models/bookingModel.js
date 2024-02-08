const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    service: { type: mongoose.Schema.Types.ObjectID, ref: 'services' },
    user: { type: mongoose.Schema.Types.ObjectID, ref: 'users' },
    bookedTimeSlots: {
        from: { type: Date },
        to: { type: Date }
    },
    totalAmount: { type: Number },
    checkuprequired: { type: Boolean },
    transactionId: { type: String },
},
    { timestamps: true }
)

module.exports = mongoose.model('bookings', bookingSchema)