import DefaultMeta from "./default-meta.tsx";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";
import React from "react";

const Layout = ({Outlet, page, path = '', canonical = ''}) => {
  return <>
    <DefaultMeta page={canonical ? canonical : page} path={path}/>
    <Navbar/>
    {Outlet}
    <Footer/>
  </>;
};

export default Layout;
