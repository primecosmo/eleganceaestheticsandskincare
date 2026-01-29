import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F3F35] text-white pt-20">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Elegance
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Premium aesthetics & skincare treatments crafted with care,
            science and nature — for healthy, glowing skin.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">
            {[FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6B65C] hover:text-[#2F2F2F] transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#E6B65C]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            {["Home", "About Us", "Services", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#E6B65C]">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            {[
              "Facial Therapy",
              "Skin Rejuvenation",
              "Organic Treatments",
              "Glow Therapy",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#E6B65C]">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm text-white/70">
            <li>
              📍 123 Elegance Street, Skin Care City
            </li>
            <li>
              📞 +92 300 1234567
            </li>
            <li>
              ✉️ elegance@skincare.com
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-16 border-t border-white/15" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">

        <p>
          © {new Date().getFullYear()} Elegance Skincare. All rights reserved.
        </p>

        <p>
          Designed with 💛 for natural beauty
        </p>
      </div>
    </footer>
  );
}
