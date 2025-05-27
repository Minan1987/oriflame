import { FaHome, FaListUl, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-14 md:hidden">
      <Link to="/" className="flex flex-col items-center text-gray-500 text-xs hover:text-blue-600">
        <FaHome className="w-5 h-5 mb-1" />
        خانه
      </Link>
      <Link to="" className="flex flex-col items-center text-gray-500 text-xs hover:text-blue-600">
        <FaListUl className="w-5 h-5 mb-1" />
        دسته‌ها
      </Link>
      <Link to="/cart" className="flex flex-col items-center text-gray-500 text-xs hover:text-blue-600">
        <FaShoppingCart className="w-5 h-5 mb-1" />
        سبد
      </Link>
      <Link to="" className="flex flex-col items-center text-gray-500 text-xs hover:text-blue-600">
        <FaUser className="w-5 h-5 mb-1" />
        حساب
      </Link>
    </nav>
  );
}
