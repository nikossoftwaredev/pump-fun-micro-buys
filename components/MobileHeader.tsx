"use client";
import SocialsSection from "@/components/SocialsSection";
import { headerLinks } from "@/data/config";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";

const MobileHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <Logo />
        <button className="btn btn-square btn-outline btn-secondary h-[40] flex justify-center mr-1">
          {openModal ? (
            <MdClose onClick={() => setOpenModal(false)} size={40} />
          ) : (
            <MdMenu onClick={() => setOpenModal(true)} size={40} />
          )}
        </button>
      </div>
      {openModal && (
        <div className="p-3 h-screen-small h-screen w-screen rounded-lg max-h-screen max-w-none flex  items-center flex-col bg-base-100  backdrop-blur-lg">
          <span className="flex flex-col gap-4 mb-10">
            {headerLinks.map((linkConfig, idx) => {
              return (
                <span key={linkConfig.path}>
                  <a
                    onClick={() => setOpenModal(false)}
                    href={linkConfig.path}
                    className={`text-3xl text-accent font-bold hover:text-primary`}
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
