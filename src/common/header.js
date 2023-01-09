import { useNavigate, Link } from "react-router-dom";
import AuthConsumer from "../auth/auth";

const Header = () => {
  const [, dispatch1] = AuthConsumer();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch1({ type: "logout" });
    navigate("/login");
  };

  const handleClick = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-100">
      <div className="px-4 mx-auto">
        <div className="flex justify-between">
          {/* Primary nav logo */}
          <div>
            <Link
              className="flex py-4 text-gray-700 hover:text-gray-900"
              to="/getAllCategory"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <span className="font-bold">E-Commerce</span>
            </Link>
          </div>

          {/* Secondary nav */}
          <div className="hidden md:flex space-x-3 items-center">
            <div>
              <Link
                className="py-2 px-3 shadow bg-yellow-400 text-yellow-800 rounded transition duration-300"
                to="/cart"
              >
                Your Cart
              </Link>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="text-gray-700 py-2 px-3 "
              >
                Logout
              </button>
            </div>
          </div>

          {/* mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleClick} className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className="hidden mobile-menu md:hidden">
        <Link
          to="/cart"
          className="w-full text-center block px-4 py-2 text-sm hover:bg-gray-200"
        >
          Your Cart
        </Link>
        <button
          onClick={handleLogout}
          className="w-full block px-4 py-2 text-sm hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
