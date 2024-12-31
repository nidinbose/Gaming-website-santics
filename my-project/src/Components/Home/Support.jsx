import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SupportAndTerms = () => {
  const [activeTab, setActiveTab] = useState('support');

  return (
    <motion.div
      className="support-terms-container bg-black text-white min-h-screen py-10 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600 font-mono">Support & Terms</h1>
      <div className="max-w-4xl mx-auto">
      
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('support')}
            className={`px-6 py-2 text-lg font-semibold rounded ${
              activeTab === 'support' ? 'bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Support
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-2 text-lg font-semibold rounded ${
              activeTab === 'terms' ? 'bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Terms and Conditions
          </button>
        </div>

     
        {activeTab === 'support' && (
          <motion.div
            className="support-content font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
              Have questions or need assistance? Our support team is here to help. Reach out to us via email or phone:
            </p>
            <ul className="list-disc ml-5 mb-6">
              <li>Email: support@santicsgaming.com</li>
              <li>Phone: +1-800-123-4567</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <p className="mb-6">
              Visit our <a href="/faqs" className="text-blue-400 underline">FAQs page</a> for answers to commonly asked questions.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Returns & Refunds</h2>
            <p>
              If you’re not satisfied with your purchase, check out our <a href="/returns" className="text-blue-400 underline">Returns & Refunds policy</a>.
            </p>
          </motion.div>
        )}

        {activeTab === 'terms' && (
          <motion.div
            className="terms-content font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              Welcome to Santics Gaming. By accessing or using our website, you agree to be bound by these Terms and Conditions.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <p className="mb-6">
              You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-6">
              All content, logos, and trademarks on this website are the property of Santics Gaming. Unauthorized use is prohibited.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              Santics Gaming is not liable for any damages arising from the use of our website or products.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Please review this page periodically.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-6">
              For questions about our Terms and Conditions, please contact us at{' '}
              <a href="mailto:legal@santicsgaming.com" className="text-blue-400 underline">
                legal@santicsgaming.com
              </a>
              .
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SupportAndTerms;
