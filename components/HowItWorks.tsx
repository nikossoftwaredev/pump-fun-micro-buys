import { SectionTitle } from "./SectionTitle";
import Card from "./Card";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <SectionTitle title="How it works" />
      <Card className="w-full">
        <div className="card-body flex flex-row flex-wrap items-center justify-center gap-8">
          <div className="max-w-xl text-center">
            <h3 className="text-lg font-semibold">
              Understanding{" "}
              <strong className="text-accent">MicroPump Bot</strong>
            </h3>
            <p className="mt-2">
              The <strong className="text-accent">MicroPump Bot</strong> boosts
              your token&apos;s volume by automating purchases during critical{" "}
              <strong className="text-accent">pump events</strong>. This helps
              your token gain visibility and potentially increase in value on
              platforms like <strong className="text-accent">pump.fun</strong>.
            </p>
            <p className="mt-2">
              Simply <strong className="text-accent">deposit funds</strong> into
              your account, set your{" "}
              <strong className="text-accent">buying parameters</strong>, paste
              the <strong className="text-accent">Pump Fun link</strong> or the{" "}
              <strong className="text-accent">CA</strong>, and the bot will
              handle the rest. The process is designed to be user-friendly and
              highly efficient.
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img
              src="/images/ui.png"
              alt="How It Works"
              className="rounded-lg shadow-lg w-96 h-auto"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HowItWorks;
