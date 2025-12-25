import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Routes/Routes";
import logo from "../../Assets/Img/demouser.jpg"

function Dashboard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(routes.LoginUrl);
  };

  return (
    <Row justify="center" className={styles.loginMain}>
      <Col xl={8}>
        <div className={styles.headerMain}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.loginName}>
          <p>Welcome to Hexagonal Archive Web</p>
        </div>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginButton}
            onClick={handleBack}
          >
            Back
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default Dashboard;
