const Header = () => {
    return (
        <header className="flex justify-between bg-transparent">
            <h1>
                <a href="/">
                    <img
                        src="/images/logo.svg"
                        alt="logo"
                        className="w-[40px] h-[40px]"
                    />
                </a>
            </h1>
            <button type="button">
                <img
                    src="/images/icon-menu.svg"
                    alt="menu"
                    className="w-[24px] h-[21px]"
                />
            </button>
        </header>
    );
};

export default Header;
