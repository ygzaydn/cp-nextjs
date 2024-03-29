import React, { useEffect, useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

const headerConfigDefault = {
  theme: "light",
  variant: "primary",
  align: "left",
  isFluid: false,
  button: "account", // trial, cart, cta, account, null
};

const footerConfigDefault = {
  theme: "dark",
  style: "style2", //style1, style2, style3
};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null,
}) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (gContext.themeDark) {
      gContext.setHeader({
        ...headerConfigDefault,
        ...headerConfig,
        theme: "dark",
      });
      gContext.setFooter({
        ...footerConfigDefault,
        ...footerConfig,
        theme: "dark",
      });
    } else {
      gContext.setHeader({ ...headerConfigDefault, ...headerConfig });
      gContext.setFooter({ ...footerConfigDefault, ...footerConfig });
    }
  }, [gContext.themeDark, headerConfig, footerConfig]);

  return <>{children}</>;
};

export default PageWrapper;
