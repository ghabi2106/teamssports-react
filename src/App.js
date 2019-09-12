import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./shared/Layout";
import RouterConfig from "./rooting/RouterConfig";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterConfig></RouterConfig>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
