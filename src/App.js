import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./shared/Layout";
import RouterConfig from "./rooting/RouterConfig";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <RouterConfig></RouterConfig>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
