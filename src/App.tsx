import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Layout, Menu, Breadcrumb } from "antd";
import HomepageRoutes from "./features/Homepage";

const { Header, Content, Footer } = Layout;

function App() {
  const menu = ["Amdahl's Law", "Little's Law"];

  return (
    <div className="">
      <Layout className="layout">
        <Header>
          <p className="float-left text-white text-3xl pt-2">
            Basic Software Programming
          </p>
          <Menu theme="dark" mode="horizontal">
            {menu.map((item, index) => {
              return <Menu.Item key={index}>{item}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={HomepageRoutes} />

              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      ,
    </div>
  );
}

export default App;
