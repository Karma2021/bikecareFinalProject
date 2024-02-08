import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Col, Popconfirm, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import AdminNav from '../components/AdminNav';
import Spinner from "../components/Loading";
import ServiceH from '../components/ServiceH';
import { deleteService, getAllServices } from "../redux/actions/service_action";
import './admin.css';

function Admin() {
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

    return (
        <div>
            <AdminNav />

            {loading && (<Spinner />)}
            <ServiceH />
            <Row className="roww" justify="space-around" gutter={16} style={{ minHeight: "90vh" }}
            >
                {totalServices?.map((service) => {
                    return (
                        <Col lg={5} sm={24} xs={24}>
                            <div className="service p-2 bs1 ">
                                <img src={service.image} className="serviceimg" />

                                <div className="service-content d-flex align-items-center justify-content-between">
                                    <div className="text-left pl-2">
                                        <p>{service.description}</p>
                                        <p> Fee {service.charge} /-</p>
                                    </div>
                                    <div className="mr-4">
                                        <Link to={`/admin/editservice/${service._id}`}>
                                            <EditOutlined className="edit" />
                                        </Link>
                                        <Popconfirm
                                            title="Confirm Service delete"
                                            onConfirm={() => {
                                                dispatch(deleteService({ serviceid: service._id }))
                                            }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined className='delete' />
                                        </Popconfirm>

                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Admin;
