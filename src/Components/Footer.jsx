import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 px-10 md:px-20 py-10 text-sm">
      
      {/* Contact */}
      <p className="mb-6">
        Questions? Contact us.
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 underline">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Account</a>
        <a href="#">Media Center</a>

        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Terms of Use</a>

        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>

        <a href="#">Speed Test</a>
        <a href="#">Legal Notices</a>
        <a href="#">Only on Netflix</a>
      </div>

      {/* Language Selector */}
      <div className="mt-8">
        <select className="bg-black border border-gray-600 px-4 py-2">
          <option>English</option>
          <option>Nepali</option>
        </select>
      </div>

      {/* Region */}
      <p className="mt-6">Netflix Nepal</p>

      {/* Bottom Text */}
      <p className="mt-6 text-xs text-gray-500 max-w-xl">
        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
      </p>
    </div>
  );
};

export default Footer;
