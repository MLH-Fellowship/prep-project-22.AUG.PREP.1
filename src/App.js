import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import SecNavbar from "./components/SecNavbar";
import Main from "./containers/Main/Main.container";
import Footer from "./containers/Footer/Footer.container";
import Hotels from "./containers/Hotels/location";
import Music from "./containers/Music/Music.container";
import Traffic from "./containers/Traffic/Traffic.component";

function App() {
  return (
    <div className="">
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
      </Router>
    </div>
  );
}

export default App;
