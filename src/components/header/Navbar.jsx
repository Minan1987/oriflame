import { useEffect } from "react";
import { HiShoppingCart, HiBell } from "react-icons/hi";
import CustomNumeralNumericFormat from "../Price";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartQuery } from "../../api/apiSlice";

import { setTotalCount } from "../../features/cartSlice";
import Search from "./Search";

const Navbar = () => {
  const dispatch = useDispatch()

  const totalItemQuantity = useSelector(state => state.cart.totalCount);
  const { data: cart } = useGetCartQuery()

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, item) => acc + item.quantity, 0);
      dispatch(setTotalCount(total));
    }
  }, [cart, dispatch]);


  return  (
    <nav className="hidden md:fixed top-0 right-0 left-0 z-50 w-full md:flex items-center justify-between bg-zinc-50 py-4 px-6 dark:bg-neutral-700">

      {/* Right side: Icons */}
      <div className="flex items-center gap-6">
        {/* ورود / عضویت */}
        <div>
          <button
            type="button"
            className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase text-primary hover:text-primary-600">
            ورود
          </button>
          <button
            type="button"
            className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white shadow transition duration-150 ease-in-out hover:bg-primary-600">
            عضویت
          </button>
        </div>

        {/* سبد خرید */}
        <div className="relative">
          <Link to="/cart" className="text-neutral-600 dark:text-white hover:text-black dark:hover:text-neutral-300">
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
          <Link to="#" className="text-neutral-600 dark:text-white hover:text-black dark:hover:text-neutral-300">
            <HiBell size={22} />
          </Link>
          <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-1 rounded-full">
            <CustomNumeralNumericFormat value={0} thousandSeparator="," />
          </span>
        </div>
      </div>

      {/* بخش سرچ */}
      <Search />
    </nav>
  )
}

export default Navbar
