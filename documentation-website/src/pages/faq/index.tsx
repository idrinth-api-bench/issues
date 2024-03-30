import React from "react";
import { Lang } from "../../components/lang.tsx";
import Layout from "../../components/layout.tsx";
import FaqItem from "../../components/faq-item.tsx";

const Index = () => (
  <Layout
    Outlet={
      <div className="title-card">
        <h1>
          <Lang lnkey="faq.title" />
        </h1>
        <p>
          <Lang lnkey={"faq.description"} />
        </p>
          <FaqItem key={"faq0"} index={0} />
          <FaqItem key={"faq1"} index={1} />
          <FaqItem key={"faq2"} index={2} />
          <FaqItem key={"faq4"} index={3} />
          <FaqItem key={"faq5"} index={4} />
          <FaqItem key={"faq6"} index={5} />
          <FaqItem key={"faq7"} index={6} />
          <FaqItem key={"faq8"} index={7} />
      </div>
    }
    page={"faq"}
    path={"/faq"}
  />
);
export default Index;
