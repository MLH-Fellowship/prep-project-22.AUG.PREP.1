import MainNavbar from "./components/MainNavbar";
import Header from "./containers/Header/Header.container";
import SecNavbar from "./components/SecNavbar";
import Main from "./containers/Main/Main.container";
import Footer from "./containers/Footer/Footer.container";

function App() {
  return (
    <div className="">
      <MainNavbar />
      <Header />
      <SecNavbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
