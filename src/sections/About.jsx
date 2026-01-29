import React from "react";
import AboutImg from "../assets/sr3.jpg";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F6EFEA] to-white text-[#2F2F2F] pt-30 lg:pt-35">

      {/* WRAPPER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">

        {/* HEADER PANEL */}
        <div className="text-center max-w-3xl mx-auto mb-24 bg-white/60 backdrop-blur rounded-3xl px-8 py-14 shadow-sm border border-[#6B3F2A]/10">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-3 text-sm sm:text-base rounded-full bg-white border border-[#6B3F2A]/20 text-[#6B3F2A]">
            ✨ About Elegance
          </span>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-tight mb-6">
            Where Skin Meets <br /> True Elegance
          </h1>

          <p className="text-[#2F2F2F]/70 text-lg sm:text-xl">
            Skincare designed with intention — blending nature, science, and
            self-care into every treatment.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

{/* IMAGE CARD */}
<div className="relative flex justify-center lg:justify-start">

  {/* YELLOW / GOLD RING */}
  <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] 
                  rounded-full border-[16px] border-[#E6B65C] 
                  top-6 left-6 z-0 opacity-90" />

  {/* ROUND IMAGE */}
  <div className="relative z-10 w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] 
                  rounded-full overflow-hidden shadow-xl bg-white">
    <img
      src={AboutImg}
      alt="About Elegance Skincare"
      className="w-full h-full object-cover"
    />
  </div>

</div>


          {/* TEXT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Thoughtful Care. <br /> Visible Results.
            </h2>

            <p className="text-[#2F2F2F]/70 mb-6 text-lg">
              At <span className="font-semibold">Elegance Aesthetics & Skincare</span>,
              we focus on results that feel natural, treatments that respect
              your skin, and experiences that restore confidence.
            </p>

            <p className="text-[#2F2F2F]/70 mb-10 text-lg">
              Every session is tailored to your skin’s unique needs — ensuring
              balance, safety, and long-lasting glow.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              {[
                "Certified Skin Specialists",
                "Organic & Skin-Safe Products",
                "Customized Treatment Plans",
                "Trusted by Thousands of Clients",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-[#6B3F2A]/10"
                >
                  <span className="w-3 h-3 rounded-full bg-[#E6B65C]" />
                  <p className="font-medium text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US – DARK GREEN */}
        <div className="mt-32 mb-20  bg-[#E2F1EC] rounded-3xl px-8 sm:px-12 lg:px-16 py-20">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#2F6B57] mb-4">
              Why Choose Elegance
            </h3>
            <p className="text-[#2F2F2F]/70 text-lg">
              A premium experience designed to care for your skin, inside and out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Guidance",
                desc: "Professionally trained specialists with proven results.",
              },
              {
                title: "Skin-Safe Products",
                desc: "Carefully selected organic and dermatology-approved formulas.",
              },
              {
                title: "Personalized Care",
                desc: "Every treatment tailored to your skin type and goals.",
              },
              {
                title: "Relaxing Experience",
                desc: "A calm, hygienic and luxury environment for total comfort.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#2F6B57]/10 text-center"
              >
                <h4 className="text-lg font-semibold text-[#2F6B57] mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#2F2F2F]/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
