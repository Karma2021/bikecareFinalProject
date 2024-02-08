import { Col, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from "../components/AdminNav";
import { addService } from "../redux/actions/service_action";
import './addservice.css';

function AddService() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.alertsReducer)

  function onFinish(values) {
    values.bookedTimeSlots = []
    dispatch(addService(values))
    console.log(values);
  }
  return (
    <div>
      <AdminNav />
      <Row justify="center " className="addservicerow"  >
        <Col lg={12} sm={24} xs={24} className="mt-5 p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h1 style={{ fontFamily: 'serif' }}>Add New Service</h1>
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
            <button className="adminbtn">Add Service</button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AddService;
