import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Account = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'register'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden" style={{ minHeight: 520 }}>

          {/* Left promo panel - hidden on small screens */}
          <div className="hidden md:flex flex-1 flex-col items-start justify-center p-12 bg-gradient-to-b from-blue-50 to-white">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow">
                <span className="font-bold text-blue-800">AV</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">Welcome to AV Market</h2>
            <p className="text-gray-600 text-lg max-w-xs mb-8">
              Sign in or create an account to access orders, wishlist and faster checkout.
            </p>

            {/* Illustration - external placeholder; change to a local asset if desired */}
            <img
              src="https://img.freepik.com/premium-vector/online-shopping-concept-flat-illustration_176411-2126.jpg?w=900"
              alt="shopping illustration"
              className="w-64 rounded-md shadow-sm mt-4"
            />
          </div>

          {/* Right auth card */}
          <div className="w-full md:w-96 flex items-center justify-center p-8">
            <div className="w-full bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex rounded-full bg-gray-100 p-1">
                  <button
                    onClick={() => setMode('login')}
                    className={`px-4 py-2 rounded-l-lg focus:outline-none ${mode === 'login' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700'}`}
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => setMode('register')}
                    className={`px-4 py-2 rounded-r-lg focus:outline-none ${mode === 'register' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700'}`}
                  >
                    Register
                  </button>
                </div>
              </div>

              <div className="px-2">
                {mode === 'login' ? <Login embedded={true} /> : <Register embedded={true} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
