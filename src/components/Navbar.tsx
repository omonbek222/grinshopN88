import { FaSearch, FaBell, FaShoppingCart, FaSignInAlt } from "react-icons/fa";

const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => {
  return (
    <header className="w-full flex items-center justify-between py-6 px-10 border-b border-green-200">
      <div className="flex items-center gap-2 text-green-600 text-2xl font-bold">
        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">
          ✓
        </div>
        <span>GREENSHOP</span>
      </div>

      <nav className="flex gap-10 text-black font-medium">
        <a href="#">Home</a>
        <a href="#">Blog</a>
      </nav>

      <div className="flex items-center gap-6 text-xl text-gray-700">
        <FaSearch />
        <FaBell />
        <FaShoppingCart />
        <button
          onClick={onLoginClick}
          className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaSignInAlt /> Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
