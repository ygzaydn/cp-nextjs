import React, { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";

import styled, { ThemeProvider } from "styled-components";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/image/png/favicon.png";

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
  }, [gContext]);

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Head>
            <title>Yeni Nesil Yurt Dışı Kargo ve Lojistik Platformu | cargopanel</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
            <meta name="description" content="Yeni nesil lojistik platformu cargopanel ile en uygun yurt dışı kargo teklifini alın, teklifleri karşılaştırın, gönderi oluşturun ve yönetin." />
            <meta name="author" content="CARGOPANEL" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta property="og:title" content="CARGOPANEL" />  
            <meta property="og:description" content="Yeni nesil yurt dışı kargo ve lojistik platformu" />  
            <meta property="og:url" content="https://www.cargopanel.co/" />  
            <meta property="og:image" content={imgFavicon} />  
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta charset="UTF-8" />
            <meta name="robots" content="index, follow" />
            <meta name="Language" content="Turkish" />
            <meta http-equiv="Content-Language" content="tr" />
            <link rel="canonical" href="https://www.cargopanel.co/" />
            <meta http-equiv="refresh" content="10000; url=https://www.cargopanel.co/" />
          </Head>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            <Header isDark={gContext.headerDark} />
            {children}

            <Footer isDark={gContext.footerDark} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );  
};

export default Layout;
