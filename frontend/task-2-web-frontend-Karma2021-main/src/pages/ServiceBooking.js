import { Checkbox, Col, DatePicker, Divider, Modal, Row } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { bookService } from "../redux/actions/booking_action";
import { getAllServices } from "../redux/actions/service_action";
const { RangePicker } = DatePicker;
AOS.init();

function ServiceBooking() {
  const { serviceid } = useParams();
  const { services } = useSelector((state) => state.serviceReducer);
  const [service, setservice] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [checkup, setcheckup] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  useEffect(() => {
    if (services.length > 0) {
      const selectedService = services.find(
        (service) => service._id === serviceid
      );
      setservice(selectedService);
    }
  }, [services, serviceid]);

  useEffect(() => {
    setTotalAmount((totalHours * service.charge) / totalHours);
    if (checkup) {
      setTotalAmount(totalAmount + 150);
    }
  }, [checkup, totalHours]);

  function selectTimeSlots(values) {
    const [fromMoment, toMoment] = values;
    setFrom(fromMoment.toISOString()); // Convert to ISO string
    setTo(toMoment.toISOString()); // Convert to ISO string
    setTotalHours(toMoment.diff(fromMoment, "hours")); // Use 'true' to get decimal hours
  }

  // function bookNow() {

  // }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      service: service._id,
      totalAmount,
      checkuprequired: checkup,
      bookedTimeSlots: {
        from: from,
        to: to,
      },
    };
    dispatch(bookService(reqObj));
  }

  return (
    <div>
      <NavBar />
      <div className="service-booking">
        <Row
          justify="center"
          className="d-flex align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <Col lg={10} sm={24} xs={24} className="p-3">
            <img
              className="service-image bs1 w-100"
              data-aos='flip-left'
              data-aos-duration='1500'
              src={service.image}
              alt={service.description}
            />
          </Col>
          <Col lg={10} sm={20} xs={18} className="text-right "
          >
            <Divider type="horizontal" dashed>
              Service Info
            </Divider>
            <div style={{ textAlign: "right" }}>
              <p>Type: {service.description}</p>
              <p>Fee: {service.charge}</p>
            </div>
            <Divider type="horizontal" dashed>
              Choose The Date
            </Divider>
            <RangePicker
              showTime={{ format: "HH:mm" }}
              format={"MMM DD YYYY HH:mm"}
              onChange={selectTimeSlots}
            />
            <br />
            <button className="btn2 mt-2" onClick={() => setShowModal(true)}>
              Show Booking Slots
            </button>
            {from && to && (
              <div>
                <p>Time left: {totalHours} hrs</p>
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setcheckup(true);
                    } else {
                      setcheckup(false);
                    }
                  }}
                >
                  Additional Checkup
                </Checkbox>
                <h2>Total Amount: {totalAmount}</h2>

                <StripeCheckout
                  shippingAddress
                  token={onToken}
                  currency="NPR"
                  amount={totalAmount * 100}
                  stripeKey="pk_test_51NVnWRDG1kTmjXztDWszibKFtqkB1f6a4lXkG6mDKjrpFyG5TQ8TYX969OSHkIItr7mFZLxqqbIhCKmnIaAcs6bN00izyypTTd"
                >
                  <button className="btn2">Book Now</button>
                </StripeCheckout>
              </div>
            )}
          </Col>
          {service.description && (
            <Modal
              open={showModal}
              closable={false}
              footer={false}
              title="Booking Time Slot"
            >
              <div className="p-2">
                {service.bookedTimeSlots.map((slot) => {
                  return (
                    <button className="btn2 mt-2">
                      {slot.from} - {slot.to}
                    </button>
                  );
                })}
                <div className="text-right mt-5">
                  <button
                    className="btn2"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceBooking;
