import React from "react";
import App from "./App";
<<<<<<< HEAD:src/app/page.jsx
 
=======
import { GlobalProvider } from "./globalVariables";

>>>>>>> 4df6aae488875dadff754dece05f1aaf1341b0d2:app/page.jsx
const Layout = () => {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD:src/app/page.jsx
        <App />
=======
        <GlobalProvider>
          <App/>
        </GlobalProvider>
>>>>>>> 4df6aae488875dadff754dece05f1aaf1341b0d2:app/page.jsx
      </body>
    </html>
  );
};

export default Layout;
