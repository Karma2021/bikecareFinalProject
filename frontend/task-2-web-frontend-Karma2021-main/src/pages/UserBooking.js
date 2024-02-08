import { Col, Row } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Spinner from "../components/Loading";
import NavBar from "../components/NavBar";
import { getAllBookings } from "../redux/actions/booking_action";
import './userbooking.css';

function UserBooking() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector(state => state.alertsReducer)

  const user = JSON.parse(localStorage.getItem('users'))

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <div>
      <NavBar />
      {loading && (<Spinner />)}
      <h2 className="text-center mt-4 mb-3">MY BOOKING</h2>
      <Row justify='center' 
          style={{ minHeight: "41.5vh" }}
          >
        <Col lg={16} sm={24}>
          {bookings.filter(o => o.user === user?._id).map((booking) => {
            return (
              <Row gutter={16} className="bs1 mt-4 text-left" >
                <Col lg={6} sm={24} className="p-3">
                  <p>
                    Servicing Type : <b>{booking.service?.description}</b>
                  </p>
                  <p>
                    Fee : <b>{booking.service?.charge}</b>
                  </p>
                  <p>
                    Additional Check : <b>{booking.checkuprequired ? "Yes" : "No"}</b>
                  </p>
                  <p>
                    Total Amount : <b>{booking.totalAmount}</b>
                  </p>
                </Col>
                <Col lg={12} sm={24} className="p-3">
                  <p>
                    TransactionId : <b>{booking.transactionId}</b>
                  </p>
                  <p>From : <b> {booking.bookedTimeSlots.from}</b>
                  </p>
                  <p>To : <b> {booking.bookedTimeSlots.to}</b>
                  </p>
                  <p>Date Of Booking : <b> {moment(booking.createdAt).format('MMM DD yyyy')}</b>
                    </p>
                </Col>
                <Col lg={6} sm={24} className="text-right p-3">
                  <img src={booking.service?.image} height={'140'} className="p-2" />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row >
      <Footer />
    </div >
  );
}

export default UserBooking;
