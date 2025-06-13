import { useState } from "react";
import { FaFacebook, FaGoogle, FaQrcode } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        <div className="flex justify-center gap-6 mb-6 border-b pb-2">
          <button
            className={`text-lg font-semibold ${activeTab === "login" ? "text-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`text-lg font-semibold ${activeTab === "register" ? "text-green-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        <form className="space-y-4">
          <label className="block text-sm text-gray-600">
            Enter your username and password to {activeTab}.
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-green-500 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-green-500 rounded"
          />
          <div className="text-right">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">
            {activeTab === "login" ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 my-4">Or login with</div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 border p-2 rounded justify-center">
            <FaFacebook className="text-blue-600" /> Login with Facebook
          </button>
          <button className="flex items-center gap-3 border p-2 rounded justify-center">
            <FaGoogle className="text-red-600" /> Login with Google
          </button>
          <button className="flex items-center gap-3 border p-2 rounded justify-center">
            <FaQrcode className="text-gray-600" /> Login with Qr Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
