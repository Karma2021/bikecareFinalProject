import { Col, DatePicker, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Loading";
import "../pages/css_files/home.css";
import { getAllServices } from "../redux/actions/service_action";
import './css_files/service.css';
const { RangePicker } = DatePicker;

function ServiceComponent() {
  const { services } = useSelector((state) => state.serviceReducer);
  const { loading } = useSelector(state => state.alertsReducer)

  const [totalServices, setTotalServices] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  useEffect(() => {
    setTotalServices(services);
  }, [services]);

  function setFilter(values) {
    var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");
    var temp = [];

    for (var service of totalServices) {
      if (service.bookedTimeSlots.length === 0) {
        temp.push(service);
      } else {
        for (var booking of service.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(service);
          }
        }
      }
    }
    setTotalServices(temp);
  }

  return (
    <div>

      {/* <Row className="mt-3" justify={"center"}>
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format={"MMM DD YYYY HH:mm"}
            onChange={setFilter}
          />
        </Col>
      </Row> */}
      {loading && (<Spinner />)}

      <Row className="roww" justify="space-around" gutter={16}
        style={{ minHeight: "45vh" }}
      >
        {totalServices.map((service) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="service p-2 bs1 ">
                <img src={service.image} className="serviceimg" />

                <div className="service-content d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{service.description}</p>
                    <p> Fee {service.charge} /-</p>
                  </div>
                  <div>
                    <button className="adminbtn mr-2">
                      <Link to={`/booking/${service._id}`}>
                        <span>Book Now</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ServiceComponent;
