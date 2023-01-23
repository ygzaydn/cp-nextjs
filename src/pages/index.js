import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Content1 from "../sections/Content1";
import Content2 from "../sections/Content2";
import Content3 from "../sections/Content3";
import Brand from "../sections/Brand";
import Testimonial from "../sections/Testimonial";
import CTA from "../sections/CTA";

const cargopanel = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "right",
          button: "account", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Features />
        <Content1 />
        <Content2 />
        <Content3 />
        <Brand />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default cargopanel;
