import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import AutoScrollRow from '../components/AutoScrollRow';

const Home = () => {
  const [categories] = useState([
    {
      id: 1,
      name: 'Electronics',
      slug: 'electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500',
    },
    {
      id: 2,
      name: 'Fashion',
      slug: 'fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500',
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      slug: 'home-kitchen',
      image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=500',
    },
    {
      id: 4,
      name: 'Books',
      slug: 'books',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500',
    },
  ]);

  const promoted = [
    { id: 1, name: 'Smartphone Pro', price: 29999, img: 'https://picsum.photos/id/1005/400/300', link: '/product/4' },
    { id: 2, name: 'Wireless Headphones', price: 4999, img: 'https://picsum.photos/id/1011/400/300', link: '/product/1' },
    { id: 3, name: 'Air Fryer Deluxe', price: 5999, img: 'https://picsum.photos/id/1025/400/300', link: '/product/9' },
    { id: 4, name: 'Fashion Sneakers', price: 2999, img: 'https://picsum.photos/id/103/400/300', link: '/product/5' },
    { id: 5, name: 'Gaming Console', price: 39999, img: 'https://picsum.photos/id/1050/400/300', link: '/products' },
    { id: 6, name: '4K Smart TV', price: 69999, img: 'https://picsum.photos/id/250/400/300', link: '/product/2' },
  ];
  const ads = [
    { id: 1, title: 'Big Diwali Sale', img: 'https://picsum.photos/id/1060/600/300', link: '/products/sale' },
    { id: 2, title: 'Brand Week', img: 'https://picsum.photos/id/1061/600/300', link: '/products' },
    { id: 3, title: 'New Arrivals', img: 'https://picsum.photos/id/1062/600/300', link: '/products/new' },
  ];

  // Also recommended (mirror styling of promoted)
  const alsoRecommended = [
    { id: 11, name: 'Portable Speaker', price: 1999, img: 'https://picsum.photos/id/1070/400/300', link: '/product/7' },
    { id: 12, name: 'Fitness Band', price: 2499, img: 'https://picsum.photos/id/1071/400/300', link: '/product/8' },
    { id: 13, name: 'Smartwatch', price: 9999, img: 'https://picsum.photos/id/1072/400/300', link: '/product/3' },
    { id: 14, name: 'Bluetooth Earbuds', price: 1499, img: 'https://picsum.photos/id/1073/400/300', link: '/product/6' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Categories Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Welcome to AV Market
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover Amazing Deals Every Day
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:opacity-95 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Ads Section - horizontal banners */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Sponsored Ads</h2>
        </div>
        <AutoScrollRow speed={0.8} className="py-2" paused={false}>
          {ads.map((a) => (
            <div key={a.id} className="w-96 bg-white rounded-lg shadow overflow-hidden mr-4">
              <Link to={a.link}>
                <img src={a.img} alt={a.title} className="w-full h-40 object-cover" />
              </Link>
              <div className="p-3">
                <div className="font-semibold text-sm mb-1">{a.title}</div>
                <div className="text-gray-500 text-sm">Sponsored</div>
              </div>
            </div>
          ))}
        </AutoScrollRow>
      </div>

      {/* About Products - informational section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Our Products</h2>
        <p className="text-gray-600 mb-6 max-w-3xl">
          We source high-quality products from trusted brands and verified sellers. Each product listing includes detailed descriptions, real images, customer reviews, and ratings so you can make informed decisions.
          Enjoy fast shipping, easy returns, and great customer support.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl mb-2">📦</div>
            <h3 className="font-semibold mb-2">Verified Sellers</h3>
            <p className="text-gray-600 text-sm">All sellers are verified to ensure product authenticity.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">Multiple payment options with secure checkout.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-2xl mb-2">⭐</div>
            <h3 className="font-semibold mb-2">Customer Reviews</h3>
            <p className="text-gray-600 text-sm">Read honest reviews and ratings from buyers.</p>
          </div>
        </div>
      </div>

      {/* You may also like - mirrors 'Recommended Products' */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">You May Also Like</h2>
          <div />
        </div>
        <AutoScrollRow speed={1.2} className="py-2" paused={false} showControls={true}>
          {alsoRecommended.map((p) => (
            <div key={p.id} className="w-64 bg-white rounded-lg shadow overflow-hidden">
              <Link to={p.link}>
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
              </Link>
              <div className="p-3">
                <div className="font-semibold text-sm mb-1">{p.name}</div>
                <div className="text-accent font-bold">{new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(p.price)}</div>
              </div>
            </div>
          ))}
        </AutoScrollRow>
      </div>

    

      {/* Add animation keyframes to index.css */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Large Promo Cards (below hero) */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg">
            <div className="text-2xl mb-2">⚡ Flash Sale</div>
            <div className="text-4xl font-bold mb-1">50% OFF</div>
            <div className="mb-6 opacity-90">Today Only!</div>
            <Link to="/products/sale" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow">Shop Now</Link>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg">
            <div className="text-2xl mb-2">🚚 Free Shipping</div>
            <div className="text-3xl font-bold mb-1">No Minimum</div>
            <div className="mb-6 opacity-90">Limited Time Offer</div>
            <Link to="/products" className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold shadow">Start Shopping</Link>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-r from-green-400 to-teal-400 text-white shadow-lg">
            <div className="text-2xl mb-2">👤 New User?</div>
            <div className="text-3xl font-bold mb-1">Get ₹500 OFF</div>
            <div className="mb-6 opacity-90">On Your First Order</div>
            <Link to="/signup" className="inline-block bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow">Sign Up Now</Link>
          </div>
        </div>
      </div>

      {/* Promoted Products - auto-scrolling row */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Recommended Products</h2>
          <div />
        </div>
  <AutoScrollRow speed={1.2} className="py-2" paused={false}>
          {promoted.map((p) => (
            <div key={p.id} className="w-64 bg-white rounded-lg shadow overflow-hidden">
              <Link to={p.link}>
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
              </Link>
              <div className="p-3">
                <div className="font-semibold text-sm mb-1">{p.name}</div>
                <div className="text-accent font-bold">{new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(p.price)}</div>
              </div>
            </div>
          ))}
        </AutoScrollRow>
      </div>

          {/* Trending Brands Carousel */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Top Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Brand Cards */}
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-2">👕</div>
              <div className="font-semibold">Nike</div>
              <div className="text-sm text-gray-600">Up to 40% Off</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-2">📱</div>
              <div className="font-semibold">Apple</div>
              <div className="text-sm text-gray-600">New Arrivals</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-2">💄</div>
              <div className="font-semibold">MAC</div>
              <div className="text-sm text-gray-600">Buy 2 Get 1</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-2">👟</div>
              <div className="font-semibold">Adidas</div>
              <div className="text-sm text-gray-600">30% Off</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-2">🎮</div>
              <div className="font-semibold">Sony</div>
              <div className="text-sm text-gray-600">Latest PS5 Games</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-2">💻</div>
              <div className="font-semibold">Samsung</div>
              <div className="text-sm text-gray-600">Special Deals</div>
            </div>
          </div>
        </div>

        {/* Deal of the Day */}
        <div className="mt-12 bg-yellow-100 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-yellow-800 font-bold text-xl mb-2">🌟 Deal of the Day</div>
              <div className="text-3xl font-bold text-yellow-900 mb-2">Smart 4K TV</div>
              <div className="text-yellow-800">
                <span className="line-through text-yellow-700">{new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(99999)}</span>
                <span className="text-4xl font-bold ml-2">{new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(69999)}</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-yellow-800 mb-2">Ends in:</div>
              <div className="text-2xl font-bold text-yellow-900 mb-4">05:23:45</div>
              <Link
                to="/deal-of-the-day"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                <Link to={`/category/${category.slug}`} className="text-accent hover:text-accent-dark font-medium">
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-accent mb-2">Special Offer</div>
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600 mb-4">
                Check out our latest products with amazing discounts
              </p>
              <Link
                to="/products/new"
                className="text-accent hover:text-accent-dark font-medium"
              >
                Shop Now →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-accent mb-2">Limited Time</div>
              <h3 className="text-xl font-semibold mb-2">Flash Sale</h3>
              <p className="text-gray-600 mb-4">
                Up to 50% off on selected items
              </p>
              <Link
                to="/products/sale"
                className="text-accent hover:text-accent-dark font-medium"
              >
                View Deals →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-accent mb-2">Trending</div>
              <h3 className="text-xl font-semibold mb-2">Best Sellers</h3>
              <p className="text-gray-600 mb-4">
                Discover our most popular products
              </p>
              <Link
                to="/products/trending"
                className="text-accent hover:text-accent-dark font-medium"
              >
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;