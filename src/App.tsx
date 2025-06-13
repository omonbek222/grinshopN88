import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginModal from "./components/LoginModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <Hero />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
