import { useEffect, useState } from "react";
import { HiShoppingCart, HiBell } from "react-icons/hi";
import CustomNumeralNumericFormat from "../Price";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartQuery } from "../../api/apiSlice";
import { setTotalCount } from "../../features/cartSlice";
import Search from "./Search";
import AuthModal from "../auth/AuthModal";
import { logOut } from "../../features/authSlice";
import logo from "/img/logo-main-white.png"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showAuth, setShowAuth] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const user = useSelector((state) => state.auth.user)

  const totalItemQuantity = useSelector(state => state.cart.totalCount);
  const { data: cart } = useGetCartQuery()

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, item) => acc + item.quantity, 0);
      dispatch(setTotalCount(total));
    }
  }, [cart, dispatch]);


  return (
    <nav className="hidden md:fixed top-0 right-0 left-0 z-50 w-full md:flex items-center justify-between bg-primary-500 py-4 px-6 dark:bg-primary-900">
      {/* بخش سرچ */}
      <div className="flex items-center w-[50%]">
        <img src={logo} alt="اوریفلیم" width="120px" />
        <Search />
      </div>

      {/* Right side: Icons */}
      <div className="flex items-center gap-6">
        {/* ورود / عضویت */}
        <div className="relative">
          {
            user ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className="text-sm text-white cursor-pointer"
                >
                  سلام، {user.name}
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 w-40 bg-white border border-gray-200 rounded shadow-md z-10">
                    <button
                      className="block w-full text-right px-4 py-2 text-sm hover:text-primary-500 transition-colors"
                      onClick={() => {
                        navigate("/")
                        console.log("مشاهده پروفایل");
                        setDropdownOpen(false);
                      }}
                    >
                      مشاهده پروفایل
                    </button>
                    <button
                      className="block w-full text-right px-4 py-2 text-sm hover:text-primary-500 transition-colors"
                      onClick={() => {
                        navigate("/")
                        setDropdownOpen(false);
                      }}
                    >
                      تنظیمات
                    </button>
                    <button
                      className="block w-full text-right px-4 py-2 text-sm hover:text-primary-500 transition-colors"
                      onClick={() => {
                        dispatch(logOut());
                        setDropdownOpen(false);
                      }}
                    >
                      خروج
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setShowAuth(true)}
                  className="me-3 inline-block rounded border-2 border-white px-2 pb-2 pt-2.5 text-xs font-medium uppercase text-white hover:bg-white hover:text-primary-500 transition-colors duration-500">
                  ورود | ثبت‌نام
                </button>
                {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
              </div>
            )
          }

        </div>

        {/* سبد خرید */}
        <div className="relative">
          <Link to="/cart" className="text-white hover:text-primary-200 transition-colors dark:hover:text-neutral-300">
            <HiShoppingCart size={22} />
          </Link>
          {totalItemQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-1 rounded-full">
              <CustomNumeralNumericFormat value={totalItemQuantity} thousandSeparator="," />
            </span>
          )}
        </div>

        {/* نوتیفیکیشن */}
        <div className="relative">
          <Link to="#" className="text-white hover:text-primary-200 transition-colors dark:hover:text-neutral-300">
            <HiBell size={22} />
          </Link>
          <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-1 rounded-full">
            <CustomNumeralNumericFormat value={0} thousandSeparator="," />
          </span>
        </div>
      </div>


    </nav>
  )
}

export default Navbar
