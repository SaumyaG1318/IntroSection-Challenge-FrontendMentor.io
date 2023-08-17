import React from "react";
import img1 from "../Logo Images/client-databiz.svg";
import img2 from "../Logo Images/client-audiophile.svg";
import img3 from "../Logo Images/client-maker.svg";
import img4 from "../Logo Images/client-meet.svg";

const Disc = () => {
  return (
    <div className="Discription">
      <p className="title">
        Make <br /> remote Work
      </p>
      <p className="about">
        Get your team in sync, no matter your lcoation. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="more">Learn more</button>
      <div className="clientLogo">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default Disc;
