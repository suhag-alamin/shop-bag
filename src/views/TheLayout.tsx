import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Main from "./components/common/Main";

const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Main />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TheLayout;
