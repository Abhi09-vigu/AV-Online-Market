import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [issueType, setIssueType] = useState('refund');
  const [orderId, setOrderId] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we simulate submit
    console.log('Service request', { issueType, orderId, details });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Services & Order Issues</h1>

      <p className="text-gray-600 mb-6">
        If you have a problem with an order — refund requests, cancelations or other issues — please use the form below so our support team can assist you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-3">Common Actions</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="">• Refund Issues — Request returns, provide reason and upload receipts (if applicable).</li>
            <li>• Order Cancelation — Cancel pending orders before shipment.</li>
            <li>• Change Shipping — Request address updates before dispatch.</li>
            <li>• Damaged Items — Report damaged or missing items for replacement.</li>
          </ul>
          <Link to="/customer-service" className="inline-block mt-6 text-accent font-medium">
            Need help from support? Go to Customer Support →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-3">Quick Request</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-700">Issue Type</span>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="mt-1 block w-full border-gray-200 rounded-md p-2"
              >
                <option value="refund">Refund Request</option>
                <option value="cancel">Order Cancelation</option>
                <option value="damaged">Damaged / Missing Item</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Order ID (optional)</span>
              <input
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. ORD12345678"
                className="mt-1 block w-full border-gray-200 rounded-md p-2"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Details</span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Describe the issue, expected resolution, and any relevant info"
                className="mt-1 block w-full border-gray-200 rounded-md p-2"
              />
            </label>

            <div className="flex items-center space-x-3">
              <button type="submit" className="btn-primary">
                Submit Request
              </button>
              {submitted && (
                <span className="text-green-600">Request received — our team will contact you shortly.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
