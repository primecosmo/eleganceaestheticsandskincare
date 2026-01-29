import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F6EFEA] to-white text-[#2F2F2F] pt-28 pb-24">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24 bg-white/60 backdrop-blur rounded-3xl px-8 py-14 shadow-sm border border-[#6B3F2A]/10">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white border border-[#6B3F2A]/20 text-[#6B3F2A]">
            💬 Contact Elegance
          </span>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold mb-6">
            Let’s Care For <br /> Your Skin Together
          </h1>

          <p className="text-[#2F2F2F]/70 text-lg sm:text-xl">
            Have questions or ready to begin your skincare journey?  
            We’d love to hear from you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-6">

            {[
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                value: "+92 300 1234567",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "elegance.skincare@email.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Us",
                value: "Luxury Aesthetics Clinic, Pakistan",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-[#6B3F2A]/10"
              >
                <div className="w-14 h-14 rounded-full bg-[#E6B65C]/20 flex items-center justify-center text-[#6B3F2A] text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-[#2F2F2F]/70 text-sm sm:text-base">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* CARTOON BUBBLES */}
            <div className="relative mt-10 hidden lg:block">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E6B65C]/30 rounded-full" />
              <div className="absolute top-10 left-20 w-12 h-12 bg-[#2F6B57]/20 rounded-full" />
              <div className="absolute top-24 left-4 w-8 h-8 bg-[#6B3F2A]/20 rounded-full" />
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#6B3F2A]/10 p-8 sm:p-12">

            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Book Your Consultation
            </h2>

            <form className="space-y-6">

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl border border-[#6B3F2A]/20 focus:outline-none focus:ring-2 focus:ring-[#E6B65C]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-xl border border-[#6B3F2A]/20 focus:outline-none focus:ring-2 focus:ring-[#E6B65C]"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-5 py-4 rounded-xl border border-[#6B3F2A]/20 focus:outline-none focus:ring-2 focus:ring-[#E6B65C]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F6B57] text-white py-4 rounded-full font-semibold hover:bg-[#245645] transition"
              >
                Send Message 💖
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
