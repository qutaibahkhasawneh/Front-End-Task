import './assets/css/style.css';

import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        {/* <Routes>
        
          <Route path="/" element={<Index />} />
        </Routes> */}
    <Index />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
