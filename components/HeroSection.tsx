import { GRADIENT_STYLE } from "@/data/config";
import { twMerge } from "tailwind-merge";

const HeroSection = () => {
  return (
    <section id="hero" className="hero min-h-[200px] mt-[100px] w-full">
      <div className="text-center">
        <span className="bg-gradient-to-r from-solana-purple to-solana-green text-transparent text-4xl font-extrabold text-center bg-clip-text ">
          Bump Your Tokens to the Spotlight!
        </span>
        <p className="text-2xl mt-4">
          Make your tokens trend on the{" "}
          <strong className="text-accent">pump.fun</strong>&nbsp; Using the
          lowest fees on the market .
        </p>
        <div className="flex justify-center mt-4">
          <img src="images/pump.webp" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
