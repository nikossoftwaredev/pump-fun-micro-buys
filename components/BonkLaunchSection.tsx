"use client";

import React from "react";
import { SectionTitle } from "./SectionTitle";
import { BONK_URL } from "@/data/config";

const BonkLaunchSection = () => {
  return (
    <section id="bonklaunch" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Volume bot for lets bonk" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-solana-purple to-solana-green p-[2px] rounded-lg">
            <div className="bg-base-200 rounded-lg p-8 md:p-12 text-center">
              <img 
                src="/images/promo-2.png" 
                alt="LetsBonk Promo" 
                className="mx-auto mb-8 rounded-lg shadow-2xl max-w-full h-auto" 
              />
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                Launched on LetsBonk.fun!
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Have your token appear in the front page on LetsBonk
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={BONK_URL} target="_blank" className="btn  btn-accent">
                               Buy <img className="size-7" src="/images/lets-bonk.png" />
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-black/50 rounded-lg">
                <p className="text-gray-400 text-sm">
                  Get your token featured on the front page of LetsBonk.fun with our advanced volume bot technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonkLaunchSection;