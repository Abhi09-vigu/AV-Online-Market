import { useState } from 'react';

const CustomerService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    // simulate send
    console.log('Contact support', { name, email, message });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Customer Support</h1>

      <p className="text-gray-600 mb-6">Reach out to our support team and we'll get back within 24 hours.</p>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSend} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Full name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border-gray-200 rounded-md p-2" placeholder="Your name" required />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 block w-full border-gray-200 rounded-md p-2" placeholder="you@example.com" required />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Message</span>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 block w-full border-gray-200 rounded-md p-2" placeholder="How can we help you?" required></textarea>
          </label>

          <div className="flex items-center space-x-3">
            <button className="btn-primary" type="submit">Send Message</button>
            {sent && <span className="text-green-600">Message sent — we'll reply soon.</span>}
          </div>
        </form>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-medium mb-3">Other ways to contact</h2>
        <ul className="text-gray-700 space-y-2">
          <li>• Live chat — available 9am–9pm</li>
          <li>• Phone — 1-800-ONLINE (Mon–Fri)</li>
          <li>• Help center — <a className="text-accent" href="#">FAQ & guides</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerService;
