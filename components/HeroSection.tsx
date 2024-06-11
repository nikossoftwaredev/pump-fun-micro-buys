import { GRADIENT_STYLE } from "@/data/config";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="text-center">
        <h1 className={`${GRADIENT_STYLE} my-4`}>
          Bump Your Tokens to the Spotlight!
        </h1>
        <p className="text-2xl">
          Elevate your token&apos;s ranking effortlessly with our cost-effective
          microbuys.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
