import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Person, Menu, Search, Close } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const categories = [
  { name: 'Electronics', path: '/category/electronics' },
  { name: 'Fashion', path: '/category/fashion' },
  { name: 'Home & Kitchen', path: '/category/home-kitchen' },
  { name: 'Books', path: '/category/books' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Orders', path: '/orders' },
  { name: 'Services', path: '/services' },
  { name: 'Customer Service', path: '/customer-service' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((s, it) => s + (it.quantity || 0), 0);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-md">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-white">
            AV Market
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-3 rounded-full bg-white/20 placeholder-white/80 text-white focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90">
                <Search />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/account" className="flex items-center text-white/90">
              <Person className="mr-1" />
              Account
            </Link>
            <Link to="/cart" className="flex items-center text-white/90">
              <div className="relative">
                <ShoppingCart className="mr-1" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>

        {/* Secondary Navigation */}
        {/* Categories and Links Bar */}
        <div className="hidden md:flex items-center py-3 space-x-8 text-white/90">
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 hover:text-white"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <span>Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCategoryOpen && (
              <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg py-2 w-56">
                {categories.map(category => (
                  <Link 
                    key={category.path}
                    to={category.path} 
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    onClick={() => setIsCategoryOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-accent"
            />
          </div>
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/account"
              className="block nav-link flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Person className="mr-1" />
              Account
            </Link>
            <Link
              to="/cart"
              className="block nav-link flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative">
                <ShoppingCart className="mr-1" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;