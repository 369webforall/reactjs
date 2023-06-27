const Header = () => {
  return (
    <>
      <header>
        <nav className="h-[110px] w-full flex justify-between items-center px-8 border-b border-[#222]">
          <h5 className="text-xl w-[30%]">Amsterdam, NL</h5>
          <img
            className="h-[30px] w-[30%]"
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
            alt="logo"
          />
          <i className="ri-menu-fill text-lg w-[30%] text-right"></i>
        </nav>
      </header>
    </>
  );
};

export default Header;
