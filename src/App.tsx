import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <Hero />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Footer/>
    </>
  );
}

export default App;
