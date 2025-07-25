import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from '../components/common/MainNav';
import Footer from '../components/common/Footer';

export default function HelpPage() {
  const navigate = useNavigate();
  return (
    <>
      <MainNav />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FEF7ED]" style={{ marginTop: '0px' }}>
        <h1 className="text-4xl font-bold mb-8 text-red-600 text-center">Help Center</h1>
        <div className="max-w-2xl w-full space-y-6 mb-16">
          <div className="group transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 text-red-500 group-hover:underline transition-colors duration-200">How can we help you?</h2>
            <p className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">Find answers to common questions, or contact our support team for further assistance.</p>
          </div>
          <div className="group transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 text-red-500 group-hover:underline transition-colors duration-200">Contact Support</h2>
            <p className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">Email us at <a href="mailto:support@bichance.com" className="text-red-600 underline hover:text-red-800 transition-colors">support@bichance.com</a> or use the Contact Us page.</p>
          </div>
          <div className="group transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 text-red-500 group-hover:underline transition-colors duration-200">Account Issues</h2>
            <p className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">If you have trouble logging in or verifying your account, please reset your password or reach out to us.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 