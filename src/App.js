import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import SecNavbar from "./components/SecNavbar";
import Main from "./containers/Main/Main.container";
import Footer from "./containers/Footer/Footer.container";
import Hotels from "./containers/Hotels/location";
import Traffic from "./containers/Traffic/Location";
import Music from "./containers/Music/Music.container";
import Travel from "./containers/Travel/Travel.container";
import Globe from "./containers/WorldClock/Globe";
import Things from "./components/Things/Things";


function App() {
  return (
    <div className="">
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

        <Things />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
