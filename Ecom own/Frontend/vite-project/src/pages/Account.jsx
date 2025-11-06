import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '/firebase'; // adjust path as needed
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Account = () => {
  const [mode, setMode] = useState('login');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await axios.post("http://localhost:5000/api/auth/google-login", {
        email: user.email,
        name: user.displayName,
      });

      localStorage.setItem("userId", res.data.userId);
      navigate("/dashboard");
    } catch (err) {
      console.error("Google login failed:", err.message);
      setError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden" style={{ minHeight: 'calc(100vh - 4rem)' }}>
          
          {/* Left promo panel */}
          <div className="hidden md:flex flex-1 flex-col items-start justify-center p-12 bg-gradient-to-b from-blue-50 to-white">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow">
                <span className="font-bold text-blue-800">AV</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">Welcome to AV Market</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-sm mb-8">
              Sign in or create an account to access orders, wishlist and faster checkout.
            </p>

            <img
              src="https://img.freepik.com/premium-vector/online-shopping-concept-flat-illustration_176411-2126.jpg?w=900"
              alt="shopping illustration"
              className="w-72 max-w-full rounded-md shadow-sm mt-4"
            />
          </div>

          {/* Right auth card */}
          <div className="w-full md:w-[28rem] lg:w-[32rem] flex items-center justify-center p-8">
            <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
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

                <button
                  onClick={handleGoogleLogin}
                  className="mt-6 mx-auto w-full max-w-xs flex items-center justify-center gap-2 border border-gray-300 py-2 px-3 rounded-md bg-white shadow-sm hover:bg-gray-50 transition"
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google logo"
                    className="w-4 h-4 md:w-4 md:h-4 object-contain"
                  />
                  <span className="text-gray-700 font-medium text-sm">Sign in with Google</span>
                </button>

              {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;