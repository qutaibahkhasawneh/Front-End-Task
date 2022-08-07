import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
        
          <Route path="/" element={<Index />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
