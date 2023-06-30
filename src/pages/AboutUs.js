import React from 'react'

import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div id="bio">
      <div className="Normal">
        <div className="one">
          <img
            src="../assets/placer.jpeg"
            className="img"
            style={{ marginLeft: "9vw" }}
          />
          <h3 className="name">Kyle</h3>
          <p className="parag" style={{ marginRight: "9vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="two">
          <img
            src="../assets/placer.jpeg"
            className="img"
            style={{ marginRight: "9vw" }}
          />
          <h3 className="name">Aubrey</h3>
          <p className="parag" style={{ marginLeft: "9vw" }}>
            Aubrey is a navy reservist and outdoor enthusiast who is currently
            residing in San Diego, CA with her partner and two kitties. With a
            love for people and cool places, she hopes to combine her passion
            for outdoor education/recreation with her newly found career in Full
            Stack Web Development.
          </p>
        </div>
      </div>
      <div className="reverse"></div>
      <div className="three">
        <img
          src="../assets/placer.jpeg"
          className="img"
          style={{ marginLeft: "9vw" }}
        />
        <h3 className="name">Will</h3>
        <p className="parag" style={{ marginRight: "9vw" }}>
          Will is a 12-year veteran of the US Navy and avid coder who lives in
          San Diego, CA. His passion for problem solving has led him to his
          career in Full Stack Web Development. His also loves to work with his
          3D printer and playing his guitar.
        </p>
      </div>
      <div className="four">
        <img
          src="../assets/placer.jpeg"
          className="img"
          style={{ marginRight: "9vw" }}
        />
        <h3 className="name">Halie</h3>
        <p className="parag" style={{ marginLeft: "9vw" }}>
          Halie's transition from sales to software development has provided her
          with a unique perspective. She posses strong communication skills, a
          client-focused mindset, and a deep understanding of business
          requirements. She enjoys being a wife and mom (most of the time) and
          spends her free time outdoors in sunny San Diego!
        </p>
      </div>
      <div className="product">
        <h1 className="pdc-tit">Our Product</h1>
        <p className="pdct">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
export default AboutUs