import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import SecNavbar from "./components/SecNavbar";
import Main from "./containers/Main/Main.container";
import Footer from "./containers/Footer/Footer.container";
import Lottie from 'react-lottie'
import Hotels from "./containers/Hotels/location";
import Traffic from "./containers/Traffic/Location";
import Travel from "./containers/Travel/Travel.container";
import Music from "./containers/Music/Music.container";
import animationData from "./assets/images/loading.json";
import animationData2 from "./assets/images/loading2.json";
import Globe from "./containers/WorldClock/Globe";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="">
      {
        loading ? (
          <div className="flex flex-col justify-center h-screen items-center">
            <Lottie options={defaultOptions} height={400} width={400} />
            <Lottie options={defaultOptions2} height={200} width={200} />
          </div>
        ) : (
          <Router>
            <MainNavbar />
            <SecNavbar />
            <Main />
        <Routes>
          <Route path="/hotel" element={<Hotels />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/music" element={<Music />} />
          <Route path="/trips" element={<Travel />} />
          <Route path="/globe" element={<Globe />} />
        </Routes>
            <Footer />
          </Router>)}
    </div>
  );
}

export default App;
