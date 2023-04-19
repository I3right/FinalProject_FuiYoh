import React from "react";
import LayoutNormal from "../LayoutNormal/LayoutNormal";

const Home = () => {
  return (
    <LayoutNormal>
      <div>
        <h1>YUNWHANG</h1>
        <a href={"/Login"}>
          <button>Get Start</button>
        </a>
        <a href={"/Register"}>
          <button>Register</button>
        </a>
      </div>
    </LayoutNormal>
  );
};

export default Home;
