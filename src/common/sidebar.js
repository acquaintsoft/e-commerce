const Sidebar = () => {
  return (
    <>
      <div className="relative min-h-screen md:flex">
        {/* mobile menu */}
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          {/* logo */}
          <a href="#" className="block p-4 text-white font-bold">
            E-commerece
          </a>
          <button className="mobile-menu-button p-4 focus:bg-gray-700">
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

        {/* sidebar */}
        <div className="md:relative md:translate-x-0  w-64 bg-blue-800 text-blue-100 space-y-2 px-2 py-5 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out">
          {/* logo */}
          <a href="#" className="text-white flex space-x-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            <span>E-Commerce</span>
          </a>

          <nav>
            <a
              href="#"
              className="block py-1.5 px-4 hover:bg-red-400 rounded transition duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-1.5 px-4 hover:bg-red-400 rounded transition duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="block py-1.5 px-4 hover:bg-red-400 rounded transition duration-200"
            >
              Feature
            </a>
            <a
              href="#"
              className="block py-1.5 px-4 hover:bg-red-400 rounded transition duration-200"
            >
              Pricing
            </a>
          </nav>
        </div>

        {/* content */}
        <div className="flex-1 font-bold text-2xl p-10">Content goes here</div>
      </div>
    </>
  );
};

export default Sidebar;
