import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Learnings from "./Components/Learnings";
import Footer from "./Components/Footer";

function App() {
  // a simple object
  let info = {
    name: "Jitendra Kumar",
    age: 21,
    profession: "web dev",
  };
  return (
    <React.Fragment>
      <Navbar />
      {/* <Main appName="TextStar" userInfo={info} /> */}
      <Main/>
      <Learnings/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
