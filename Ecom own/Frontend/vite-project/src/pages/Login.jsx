import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lightweight mock login: save user to localStorage and redirect to home
    const user = { email };
    localStorage.setItem('avmarket_user', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Sign in to your account</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:opacity-95">Sign In</button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          Don\'t have an account? <a href="/signup" className="text-blue-600">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
