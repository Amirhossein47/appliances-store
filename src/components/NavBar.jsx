import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomNumeralNumericFormat from "./Price";
import { selectAll } from "../slices/cartSlice";

const Navbar = () => {
  const cart = useSelector(selectAll);

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link to="/" className="cursor-pointer">
          <h1 className="flex no-underline">
            <span className="text-xl font-primary font-bold tracking-tight pt-1">
              فروشگاه لوازم خانگی
            </span>
          </h1>
        </Link>
        <div>
 
          <Link to="/cart" className="relative">
            <i
              className="fa fa-cart-arrow-down text-palette-primary m-auto"
              style={{ fontSize: "30px" }}
            ></i>
            {cart.length === 0 ? null : (
              <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-5 -translate-y-4">
                <CustomNumeralNumericFormat
                  value={cart.length}
                  thousandSeparator=","
                />
              </div>
            )}
          </Link>
          <Link to="/login" className="relative">
            <i
              className="fa fa-sign-in text-palette-primary mx-5"
              style={{ fontSize: "30px" }}
            ></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
