import React from "react";
import styles from "./HomePage.module.css";

import { Header, Footer, SideMenu, Carousel, ProductCollection, Partners } from "../../components/index";
import { Row, Col, Typography } from "antd";

import sideImage1 from "../../assets/images/sider_2019_02-04-2.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_12-09.png";
import { productList1, productList2, productList3 } from "../../mock/mockup";

export class HomePage extends React.Component {
    render(): React.ReactNode {
        return (<>
            {/* header */}
            <Header />

            {/* page content */}
            <div className={styles['page-content']}>

                {/* side menu and carousel */}
                <Row style={{ marginTop: 20 }}>
                    <Col span={6} > <SideMenu /></Col>
                    <Col span={18} > <Carousel /></Col>
                </Row>

                {/* product collection */}
                <ProductCollection
                    title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}
                    sideImage={sideImage1}
                    products={productList1}
                />

                <ProductCollection
                    title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>}
                    sideImage={sideImage2}
                    products={productList2}
                />

                <ProductCollection
                    title={<Typography.Title level={3} type="success">国内游推荐</Typography.Title>}
                    sideImage={sideImage3}
                    products={productList3}
                />

                <Partners />

            </div>

            {/* footer */}
            <Footer />
        </>);
    }
}