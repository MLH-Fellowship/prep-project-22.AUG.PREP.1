import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import SecNavbar from "./components/SecNavbar";
import Main from "./containers/Main/Main.container";
import Footer from "./containers/Footer/Footer.container";
import Hotels from "./containers/Hotels/Hotels.component";
import Music from "./containers/Music/Music.container";
import Traffic from "./containers/Traffic/Traffic.component";
import Lottie from 'react-lottie';
import animationData from './assets/images/loading.json';

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

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center h-screen items-center">
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>) : (
        <Router>
          <MainNavbar />
          <SecNavbar />
          <Main />

          <Routes>
            <Route path="/hotel" element={<Hotels />} />
            <Route path="/music" element={<Music />} />
            <Route path="/traffic" element={<Traffic />} />
          </Routes>

          <Footer />
        </Router>)}
    </div>
  );
}

export default App;
