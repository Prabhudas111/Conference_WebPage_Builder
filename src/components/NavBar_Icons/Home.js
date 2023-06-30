import React from "react";
import "./Home.css"; // Assuming you have a separate CSS 
const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="container1 ">
          <div className="items">
            <h1 className="welcome">Welcome</h1>
            <p className="conference-meeting">
              A paragraph about the conference meeting goes here.
            </p>
            {/* <button className="styled-button">Click me</button> */}
            <div class="container">
              <a href="/" className="btn">
                Let's start
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
