import React from "react";
import "./styles.scss";
import IMAGE from "./react.jpg";
import Logo from "./logo.svg";
const App = () => {
  return (
    <div className="text-center">
      <h1>React Webpack Starter Template !!!!</h1>
      <img src={Logo} alt="React logo" width="400" height="300" />
      <p>
        {process.env.name}-{process.env.NODE_ENV}
      </p>
    </div>
  );
};

export default App;
