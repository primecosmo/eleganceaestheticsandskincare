import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export default function OverlayMenu({ isOpen, onClose }) {
  const [showServices, setShowServices] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background:
              "linear-gradient(135deg, #6a3f2b 0%, #4a2b1c 100%)",
          }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              absolute top-6 right-6
              text-[#9fe3b2] text-3xl
              p-2 rounded-full
              bg-white/10
              hover:bg-[#f4c24f]
              hover:text-black
              transition
            "
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* MENU */}
          <ul className="space-y-7 text-center">
            {["Home", "Treatments", "Gallery", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="
                    text-3xl sm:text-4xl
                    font-semibold
                    text-white
                    hover:text-[#f4c24f]
                    transition
                  "
                >
                  {item}
                </a>
              </motion.li>
            ))}

            {/* SERVICES */}
            <motion.li
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span
                className="
                  text-3xl sm:text-4xl
                  font-semibold
                  text-white
                  cursor-pointer
                  hover:text-[#f4c24f]
                  transition
                "
              >
                Services
              </span>

              <AnimatePresence>
                {showServices && (
                  <motion.ul
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3 }}
                    className="
                      absolute left-1/2 -translate-x-1/2 mt-6
                      bg-[#6a3f2b]/90
                      backdrop-blur-lg
                      border border-white/20
                      rounded-2xl
                      px-8 py-6
                      space-y-4
                      shadow-2xl
                      min-w-[220px]
                    "
                  >
                    {[
                      "Facials",
                      "Injectables",
                      "Skincare",
                      "Other Treatments",
                    ].map((service) => (
                      <li key={service}>
                        <a
                          href={`#${service.toLowerCase().replace(" ", "")}`}
                          onClick={onClose}
                          className="
                            block
                            text-white/90
                            hover:text-[#9fe3b2]
                            tracking-wide
                            transition
                          "
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
