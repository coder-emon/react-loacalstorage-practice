import React from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";
const Cosmetics = () => {
  return (
    <div className="cosmetic-container">
      <Cosmetic name="Ear Rings" price="60" taxes="10" quantity="5"></Cosmetic>
      <Cosmetic name="Churi" price="90" taxes="15" quantity="3"></Cosmetic>
      <Cosmetic name="Lipstick" price="70" taxes="9" quantity="7"></Cosmetic>
      <Cosmetic name="Watch" price="50" taxes="7" quantity="9"></Cosmetic>
      <Cosmetic name="Leap liner" price="30" taxes="7" quantity="3"></Cosmetic>
      <Cosmetic name="Perfume" price="70" taxes="7" quantity="4"></Cosmetic>
    </div>
  );
};

export default Cosmetics;
