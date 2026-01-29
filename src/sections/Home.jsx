import React from "react";
import HeroImg from "../assets/sr2.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-[#F6EFEA] text-[#2F2F2F] relative overflow-hidden pt-30 lg:pt-35">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10 flex flex-col items-center lg:items-start">

          <div className="text-center lg:text-left">

            {/* TAG */}
            <span className="inline-flex items-center gap-2 mb-6 px-6 py-3 text-sm sm:text-base rounded-full bg-white border border-[#6B3F2A]/20 text-[#6B3F2A]">
              🌿 Care your skin naturally
            </span>

            {/* HEADING */}
            <h1 className="text-[40px] sm:text-[50px] lg:text-[64px] font-extrabold leading-[1.1] mb-6">
              Care Beyond <br /> Boundaries
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[#2F2F2F]/70 max-w-lg mx-auto lg:mx-0 mb-8 text-lg sm:text-xl">
              Natural skincare products crafted to preserve youth, restore
              balance and bring out your bold natural beauty.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button className="bg-[#E6B65C] text-[#2F2F2F] px-9 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Shop Now
              </button>

              <div className="text-base leading-snug text-center sm:text-left">
                <p className="font-semibold">100% Organic</p>
                <p className="text-[#2F2F2F]/60">Let your skin glow naturally</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 relative flex justify-center lg:justify-end">

          {/* GOLD RING */}
          <div
            className="
              absolute 
              w-[320px] h-80 sm:w-95 sm:h-95 lg:w-106.5 lg:h-106.5
              rounded-full 
              border-28 sm:border-32 lg:border-36
              border-[#E6B65C] 
              -top-2 -right-2
              z-0
            "
          />

          {/* IMAGE */}
          <div className="relative z-10 w-[320px] h-80 sm:w-95 sm:h-95 lg:w-105 lg:h-105 rounded-full overflow-hidden shadow-2xl bg-white">
            <img
              src={HeroImg}
              alt="Skincare Experts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BADGE */}
          <div
            className="
              absolute 
              -bottom-3 right-0 sm:right-2.5
              w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36
              rounded-full 
              flex items-center justify-center 
              text-[11px] sm:text-[12px]
              uppercase tracking-widest 
              text-white
              bg-[#6B3F2A]/90
              backdrop-blur 
              z-20
              text-center
            "
          >
            Natural <br /> Beauty <br /> Skin
          </div>
        </div>
      </div>

      {/* BOTTOM INFO STRIP */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 mt-24 lg:mt-32 pb-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center border-t border-[#6B3F2A]/15 pt-10">
        {[
          { value: "100%", label: "Organic" },
          { value: "Clear", label: "Extra Oil" },
          { value: "Youth", label: "Preserving" },
          { value: "Natural", label: "Growth" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#E6B65C]">
              {item.value}
            </h3>
            <p className="text-[#2F2F2F]/60 mt-2 text-sm sm:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
