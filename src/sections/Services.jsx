import React from "react";
import { FaLeaf, FaSpa, FaMagic, FaHeartbeat } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-white to-[#E2F1EC] py-28 text-[#2F2F2F]">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white border border-[#2F6B57]/20 text-[#2F6B57]">
            🌸 Our Services
          </span>

          <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold mb-6">
            Gentle Care for <br /> Every Skin Type
          </h2>

          <p className="text-[#2F2F2F]/70 text-lg sm:text-xl">
            Luxurious skincare treatments designed to restore balance,
            confidence and natural glow.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              icon: <FaSpa />,
              title: "Facial Therapy",
              desc: "Deep cleansing facials that refresh, hydrate and brighten your skin.",
            },
            {
              icon: <FaLeaf />,
              title: "Organic Treatments",
              desc: "Pure organic products for sensitive and long-term skin health.",
            },
            {
              icon: <FaMagic />,
              title: "Skin Rejuvenation",
              desc: "Advanced techniques to restore youth and smooth texture.",
            },
            {
              icon: <FaHeartbeat />,
              title: "Glow Therapy",
              desc: "Relaxing sessions that enhance natural radiance and confidence.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-8 shadow-sm border border-[#2F6B57]/10 hover:shadow-xl transition group"
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-full bg-[#2F6B57]/15 flex items-center justify-center text-[#2F6B57] text-2xl mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-[#2F2F2F]/70 text-sm sm:text-base">
                {service.desc}
              </p>

              {/* CARTOON DOT */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#E6B65C]/40" />
            </div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="mt-28 bg-[#2F6B57] rounded-3xl px-10 py-16 text-center text-white relative overflow-hidden">

          {/* BUBBLES */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-white/10 rounded-full" />
          <div className="absolute top-10 right-10 w-14 h-14 bg-white/10 rounded-full" />

          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Glow Naturally?
          </h3>

          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Book a personalized skincare consultation and let your skin
            experience true elegance.
          </p>

          <button className="bg-[#E6B65C] text-[#2F2F2F] px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Book Appointment ✨
          </button>
        </div>

      </div>
    </section>
  );
}
