import { Layout, Button } from 'antd';
import React from 'react';
import { PreSaleBanner } from '../../components/PreSaleBanner';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const LandingView = () => {
  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <Layout>
        <Content>
          <div style={{ width:"700px", height:"500px" }}>
            <img style={{ marginBottom: 50 }} src="https://hitput.com/wp-content/uploads/2020/08/Hewan-Unik-Salamander-Axolotl-3.jpg" alt="BG XOLOS" width="100%" height="100%"></img>
          </div>
        </Content>
        <Sider>
          <h1 style={{ fontSize: '72px', textAlign: 'left' }}>
            XOLOS
          </h1>
          <h5 style={{ textAlign: 'left' }}>
            XOLOS
          </h5>
          <Link to={`/`}>
            <Button type="primary" shape="round" className="app-btn">Mint your XOLOS!</Button>
          </Link>
        </Sider>
      </Layout>
    </Layout>
  );
};
 