import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="MLHFooter">
      <div className="icons">
        <a
          href="https://www.facebook.com/MajorLeagueHacking"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://www.instagram.com/mlhacks/"
          className="fa fa-instagram"
        ></a>
        <a
          href="https://twitter.com/MLHacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          className="fa fa-twitter"
        ></a>
        <a
          href="https://www.linkedin.com/school/mlh-fellowship/"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://www.youtube.com/c/Majorleaguehacking"
          className="fa fa-youtube"
        ></a>
      </div>
      <div className="text-center">
        <p className="copyright">MLH Prep © 2022</p>
        <p className="podname">Created with ❤ by Jekyll Jackals</p>
      </div>
    </div>
  );
};

export default Footer;
