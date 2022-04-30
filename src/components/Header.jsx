import React from "react";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <h1 className="nav__logo">Where in the world?</h1>
                <div className="darkMode">
                    <i className="uil uil-moon logo-moon"></i>
                    <h3>Dark Mode</h3>
                </div>
            </nav>
        </header>
    );
};

export default Header;
