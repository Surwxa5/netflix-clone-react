import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 px-10 md:px-20 py-10 text-sm">
      
      {/* Contact */}
      <p className="mb-6">
        Questions? Contact us.
      </p>

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
