import { Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminPanel from "../components/AdminPanel";
import Spinner from "../components/Loading";
import { editService, getAllServices } from "../redux/actions/service_action";
import "./addservice.css";
import AdminNav from "../components/AdminNav";

function EditService() {
  const dispatch = useDispatch();
  const { serviceid } = useParams();
  const { services } = useSelector((state) => state.serviceReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [service, setservice] = useState();
  const [totalService, setTotalService] = useState();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  useEffect(() => {
    if (services.length > 0) {
      const selectedService = services.find(
        (service) => service._id === serviceid
      );
      setTotalService(services);
      setservice(selectedService);
      console.log(service);
    }
  }, [services, serviceid]);

  function onFinish(values) {

    values._id = service._id
    dispatch(editService(values));
    console.log(values);
  }
  return (
    <div>
      <AdminNav/>
      {loading && <Spinner />}
      <Row justify="center " className="addservicerow">
      <Col lg={12} sm={24} xs={24} className="mt-5 p-2">
          {totalService?.length > 0 && (
            <Form
              initialValues={service}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h1 style={{fontFamily: 'serif'}}>Edit Service</h1>
              <hr />
              <Form.Item
                name="description"
                label="Service Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Service Image"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="charge"
                label="Service Charge"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <button className="adminbtn">Edit</button>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default EditService;
