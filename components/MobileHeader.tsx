"use client";
import SocialsSection from "@/components/SocialsSection";
import { TELEGRAM_BOT_URL, headerLinks } from "@/data/config";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";
import Button from "./Button";

const MobileHeader = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [openModal]);

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <Logo />
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          className="animate-pulse-scale"
        >
          <Button>Try the Bot</Button>
        </a>
        <button className="btn btn-square btn-outline btn-secondary h-[40] flex justify-center mr-1">
          {openModal ? (
            <MdClose onClick={() => setOpenModal(false)} size={40} />
          ) : (
            <MdMenu onClick={() => setOpenModal(true)} size={40} />
          )}
        </button>
      </div>
      {openModal && (
        <div
          className="overscroll-none overflow-hidden p-3 
                    h-screen-small h-screen w-full max-h-screen 
                    max-w-none flex items-center flex-col justify-center
                    backdrop-blur-lg"
        >
          <span className="flex flex-col justify-center items-center gap-4 mb-10">
            {headerLinks.map((linkConfig, idx) => {
              return (
                <span key={linkConfig.path}>
                  <a
                    onClick={() => setOpenModal(false)}
                    href={linkConfig.path}
                    className={`text-3xl text-primary font-extrabold uppercase hover:text-primary`}
                  >
                    {linkConfig.text}
                  </a>
                </span>
              );
            })}
          </span>

          <SocialsSection />
        </div>
      )}
    </>
  );
};

export default MobileHeader;
