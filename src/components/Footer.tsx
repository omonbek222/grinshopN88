import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-green-600 mb-4">GREENSHOP</h2>
          <p className="text-sm">
            We offer a wide range of cheap and trendy plants. Order your
            favorite plants today!
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">House Plants</a></li>
            <li><a href="#">Potter Plants</a></li>
            <li><a href="#">Seeds</a></li>
            <li><a href="#">Small Plants</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@greenshop.com</p>
          <p className="text-sm">Phone: +998 90 123 45 67</p>
          <p className="text-sm">Address: Tashkent, Uzbekistan</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Greenshop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
