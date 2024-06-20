"use client";
import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import {
  BIRDEYE_URL,
  PUMP_URL,
  TELEGRAM_BOT_URL,
  TOKEN_ADDRESS,
  TOKEN_SYMBOL,
  TOTAL_SUPPLY,
} from "@/data/config";
import { FaChartLine, FaCopy } from "react-icons/fa";
import Toast from "@/components/Toast";
import { useState } from "react";
import Stat from "./Stat";
import { CiMicrochip } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa";
import JupiterTerminal from "./JupiterTerminal";

const TokenSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <Toast title="Token address copied" />}
      <section id="token" className="w-full space-y-6">
        <SectionTitle title="Utility Token" />

        <div className="stats stats-vertical shadow outline outline-accent w-full">
          {[
            {
              title: "Symbol",
              value: (
                <span className="flex items-center gap-2">
                  <CiMicrochip /> {TOKEN_SYMBOL}
                </span>
              ),
            },
            {
              title: "Total Supply",
              value: (
                <span className="flex items-center gap-2">
                  <TbMoneybag /> {TOTAL_SUPPLY}
                </span>
              ),
            },
            {
              title: "Tier 1 Holder Discount",
              value: (
                <span className="flex items-center gap-2">
                  <FaTrophy className="text-gold" /> 90% Off
                </span>
              ),
            },
            {
              title: "Tier 2 Holder Discount",
              value: (
                <span className="flex items-center gap-2">
                  <FaTrophy className="text-silver" /> 40% Off
                </span>
              ),
            },
            {
              title: "Tier 3 Holder Discount",
              value: (
                <span className="flex items-center gap-2">
                  <FaTrophy className="text-bronze" /> 10% Off
                </span>
              ),
            },
          ].map(({ title, value }) => (
            <Stat key={title} title={title} value={value} />
          ))}
        </div>
        <Card className="w-full">
          <span className="card-body p-2">
            <span className="grid grid-cols-2 items-center justify-center gap-4 font-extrabold text-2xl">
              <button
                className="btn btn-outline btn-accent m-1 text-xs col-span-2"
                onClick={() => {
                  setShowAlert(true);
                  navigator.clipboard.writeText(TOKEN_ADDRESS);
                  setTimeout(() => {
                    setShowAlert(false);
                  }, 2000);
                }}
              >
                <span className="hidden sm:block">
                  <FaCopy />
                </span>
                {TOKEN_ADDRESS}
              </button>
              <a href={PUMP_URL} target="_blank" className="btn  btn-accent">
                Buy <img src="/images/pump.webp" />
              </a>
              <a
                href={BIRDEYE_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Charts <FaChartLine size={20} />
              </a>
            </span>
          </span>
        </Card>
        <Card>
          <span className="text-2xl mt-4 p-4">
            Token holders will have a{" "}
            <strong className="text-accent">discount</strong> to service fees
            based on the amount of{" "}
            <strong className="text-accent">{TOKEN_SYMBOL}</strong> that they
            hold. &nbsp;
            <br />
            <br />
            <ul>
              <li>
                <span className="font-bold text-gold">Tier 1</span>{" "}
                <i>(10M Tokens)</i>
              </li>
              <li>
                <span className="font-bold text-silver">Tier 2</span>{" "}
                <i>(4M Tokens)</i>
              </li>
              <li>
                <span className="font-bold text-bronze">Tier 3</span>{" "}
                <i>(1M Tokens)</i>
              </li>
            </ul>
            <br />
            Transfer the tokens to your{" "}
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              className="text-accent font-bold"
            >
              @micropump_bot{" "}
            </a>
            wallet and get your discount automatically.
          </span>
        </Card>
        <JupiterTerminal />
      </section>
    </>
  );
};

export default TokenSection;
