import Header from "./Componets/Header";
import Main from "./Componets/Main";
import Geniuses from "./Componets/Geniuses";
import Footer from "./Componets/Footer";

import Test from "./Componets/Test";

// import "./index.css";

import "./index.css";

import "./App.css";

import ".";

function App() {
  return (
    <>
      <div className="bg-[black] flex flex-col font-serif ">
        <Header />
        <Main />

        <Geniuses />
        <Footer />
      </div>
    </>
  );
}

export default App;
