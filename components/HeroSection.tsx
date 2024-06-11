import { GRADIENT_STYLE } from "@/data/config";

const HeroSection = () => {
  return (
    <section id="hero" className="hero min-h-[200px]">
      <div className="text-center">
        <h1 className={`${GRADIENT_STYLE} my-4`}>
          Bump Your Tokens to the Spotlight!
        </h1>
        <p className="text-2xl">
          Make your tokens trend on the pump.fun front page.
          <br />
          Using the lowest fees on the market .
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
