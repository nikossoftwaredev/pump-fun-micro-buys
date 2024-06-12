"use client";
import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import {
  BIRDEYE_URL,
  PUMP_URL,
  TOKEN_ADDRESS,
  TOKEN_SYMBOL,
  TOTAL_SUPPLY,
} from "@/data/config";
import { FaChartLine, FaCopy } from "react-icons/fa";
import Toast from "@/components/Toast";
import { useState } from "react";
import Stat from "./Stat";

const TokenSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <Toast title="Token address copied" />}
      <section id="token" className="w-full space-y-6">
        <SectionTitle title="Utility Token" />
        <div className="stats stats-vertical shadow outline outline-accent w-full">
          {[
            { title: "Symbol", value: `✨ ${TOKEN_SYMBOL}` },
            { title: "Total Supply", value: `💰 ${TOTAL_SUPPLY}` },
            { title: "Utility", value: "🎁 0% fees" },
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
                CHARTS <FaChartLine size={20} />
              </a>
            </span>
          </span>
        </Card>
      </section>
    </>
  );
};

export default TokenSection;
