import { GRADIENT_STYLE } from "@/data/config";
import { twMerge } from "tailwind-merge";

const HeroSection = () => {
  return (
    <section id="hero" className="hero min-h-[200px] mt-[100px] w-full ">
      <div className="text-center space-y-6 mt-6">
        <span className="bg-gradient-to-r from-solana-purple to-solana-green text-transparent text-4xl font-extrabold text-center bg-clip-text ">
          Bump Your Tokens to the Spotlight!
        </span>
        <p className="text-2xl">
          Make your tokens trend on
          <strong className="text-accent">
            <a href="https://pump.fun"> pump.fun</a>.
          </strong>
          <p className="text-xl">
            Enjoy the <strong className="text-accent">cheapest</strong> and most{" "}
            <strong className="text-accent">efficient</strong> micro pump bot.
          </p>
        </p>
        <div className="flex justify-center">
          <img src="images/pump.webp" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
