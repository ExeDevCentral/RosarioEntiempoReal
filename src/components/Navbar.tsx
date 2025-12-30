import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity">
                            CityPortal
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/news">Noticias</NavLink>
                            <NavLink to="/cinema">Cine</NavLink>
                            <NavLink to="/parking">Cocheras</NavLink>
                            <NavLink to="/hotels">Hoteles</NavLink>
                            <NavLink to="/agenda">Agenda</NavLink>
                            <NavLink to="/info">Info Local</NavLink>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link to="/login" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md hover:shadow-lg">
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link
        to={to}
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
    >
        {children}
    </Link>
);

export default Navbar;
