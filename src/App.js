import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import SecNavbar from "./components/SecNavbar";
import Main from "./containers/Main/Main.container";
import Footer from "./containers/Footer/Footer.container";

function App() {
  return (
    <div className="">
      <Router>
        <MainNavbar />
        <SecNavbar />

        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
