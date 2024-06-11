"use client";

import { TELEGRAM_BOT_URL, headerLinks } from "@/data/config";
import Logo from "./Logo";
import MobileHeader from "./MobileHeader";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full z-[999]  bg-base-200 fixed max-h-[100px]">
      <nav className="w-full text-accent ">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <ul className="p-4 w-full flex flex-wrap  md:flex-row justify-between items-center mr-1">
            <span className="flex gap-6 justify-center items-center w-full">
              <Logo />
              {headerLinks.map((linkConfig) => {
                return (
                  <li key={linkConfig.path}>
                    <a
                      href={linkConfig.path}
                      className={`font-bold text-lg hover:text-primary`}
                    >
                      {linkConfig.text}
                    </a>
                  </li>
                );
              })}
              <a href={TELEGRAM_BOT_URL} target="_blank">
                <Button>Launch App</Button>
              </a>
            </span>
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
