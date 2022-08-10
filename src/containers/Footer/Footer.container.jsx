import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="MLHFooter">
           <div class = "icons"> 
            <a href="https://www.facebook.com/MajorLeagueHacking" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/mlhacks/" class="fa fa-instagram"></a>
            <a href="https://twitter.com/MLHacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="fa fa-twitter"></a>
            <a href="https://www.linkedin.com/school/mlh-fellowship/" class="fa fa-linkedin"></a>
            <a href="https://www.youtube.com/c/Majorleaguehacking" class="fa fa-youtube"></a>
           </div>
            <div className="text-center">
               <p class="copyright">MLH Prep © 2022</p>
               <p class="podname">Created with ❤ by Jekyll Jackals</p>
            </div>
        </div>
    )
}


export default Footer;