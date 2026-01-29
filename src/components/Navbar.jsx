import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logoo from "../assets/lll.png";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Home observer
  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-40
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-32"}`}
      >
        {/* CAPSULE */}
        <div
          className="
            flex items-center justify-between
            w-[92vw] max-w-7xl
            h-16
            px-5 sm:px-7
            rounded-full
            backdrop-blur-xl
            bg-[#6a3f2b]/70
            border border-white/15
            shadow-2xl
          "
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logoo}
              alt="logo"
              className="h-10 sm:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-10 text-white/90 font-medium">
            {[
              { name: "Home", id: "home" },
              { name: "Treatments", id: "about" },
              { name: "Services", id: "services" },
              { name: "Gallery", id: "gallery" },
              { name: "Contact", id: "contact" },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="
                  relative
                  hover:text-[#f4c24f]
                  transition
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px]
                  after:bg-[#3fa34d]
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#book"
            className="
              hidden lg:flex items-center justify-center
              px-6 h-9
              text-sm font-semibold
              rounded-full
              bg-[#f4c24f]
              text-black
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Book Now
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              lg:hidden
              text-white
              text-2xl
              p-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition
            "
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* OVERLAY MENU */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
