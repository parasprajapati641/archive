 /* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Input, Form } from "antd";

import { routes } from "../../Routes/Routes"; 
import { loginApi } from "../../Features/User/users.js";
import logo from "../../Assets/Img/demouser.jpg"

import styles from "./index.module.scss";

function CreateArchive() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

   const isLoginLoading = useSelector((state) => state.user.isLoginLoading);

  const onFinish = (values) => {
  const onSuccessCallback = (res) => {
    if (res?.status === 200 || res?.data?.status === 200) {
      console.log("success");
      
    }
  };
  
  dispatch(loginApi(values, onSuccessCallback));
  navigate(routes.DashboardUrl);
};


  return (
    <Row justify="center" className={styles.loginMain}>
      <Col xl={8}>
        <div className={styles.headerMain}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.loginName}>
          <p>Lohin to Hexagonal Archive Web</p>
        </div>
        <Form name="login-form" autoComplete="false" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: " " }]}>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: " " }]}>
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Form.Item className={styles.buttonMain}>
            <div>
              <Button
                type="primary"
                htmlType="submit" 
                loading={isLoginLoading}
                className={styles.loginButton}
              >
                Create
              </Button>
            </div>
          </Form.Item>
        </Form> 
      </Col>
    </Row>
  );
}

export default CreateArchive;

