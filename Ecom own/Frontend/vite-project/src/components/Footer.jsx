import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-accent-dark">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-accent-dark">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-accent-dark">Press Releases</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-accent-dark">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent-dark">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent-dark">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-gray-600 hover:text-accent-dark">Your Account</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-accent-dark">Shipping Rates & Policies</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-accent-dark">Returns & Replacements</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-accent-dark">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Shopping Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/electronics" className="text-gray-600 hover:text-accent-dark">Electronics</Link></li>
              <li><Link to="/fashion" className="text-gray-600 hover:text-accent-dark">Fashion</Link></li>
              <li><Link to="/home" className="text-gray-600 hover:text-accent-dark">Home & Kitchen</Link></li>
              <li><Link to="/books" className="text-gray-600 hover:text-accent-dark">Books</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} AV Market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;