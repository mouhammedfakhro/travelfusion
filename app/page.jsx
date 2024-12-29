import React from "react";
import App from "./App";
import { GlobalProvider } from "./globalVariables";

const Layout = () => {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <App/>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default Layout;
