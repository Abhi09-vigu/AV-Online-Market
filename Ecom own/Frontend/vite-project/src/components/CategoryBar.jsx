import { Link } from 'react-router-dom';
import {
  Smartphone,
  Checkroom,
  HomeMax,
  MenuBook,
  LocalOffer,
  Tv,
  Flight,
  ShoppingBasket,
} from '@mui/icons-material';

const categories = [
  { name: 'Minutes', icon: <LocalOffer />, path: '/category/minutes', isNew: true },
  { name: 'Mobiles & Tablets', icon: <Smartphone />, path: '/category/electronics' },
  { name: 'Fashion', icon: <Checkroom />, path: '/category/fashion' },
  { name: 'Electronics', icon: <Tv />, path: '/category/electronics/gadgets' },
  { name: 'Home & Furniture', icon: <HomeMax />, path: '/category/home-kitchen' },
  { name: 'TVs & Appliances', icon: <Tv />, path: '/category/electronics/tv' },
  { name: 'Flight Bookings', icon: <Flight />, path: '/flights' },
  { name: 'Grocery', icon: <ShoppingBasket />, path: '/category/grocery' },
];

const CategoryBar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2 overflow-x-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="flex flex-col items-center min-w-[100px] px-4 py-2 hover:text-blue-600 transition-colors"
            >
              <div className="relative">
                {category.icon}
                {category.isNew && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <span className="text-sm mt-1 text-center whitespace-nowrap">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;