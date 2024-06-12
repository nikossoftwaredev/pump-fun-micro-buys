import { SectionTitle } from "./SectionTitle";
import Card from "./Card";

const AboutSection = () => {
  return (
    <section id="about">
      <Card className="w-full">
        <div className="card-body flex flex-row flex-wrap items-center justify-center gap-8">
          <SectionTitle title="About" />
          <div className="space-y-4">
            <p>
              <strong className="text-accent">MicroPump Bot</strong> is a
              specialized Telegram bot designed to enhance your token&apos;s
              visibility by boosting its volume on{" "}
              <strong className="text-accent">pump.fun</strong>.
            </p>
            <p>
              Easily configure your{" "}
              <strong className="text-accent">transaction fees</strong>, paste
              the <strong className="text-accent">CA</strong> or the{" "}
              <strong className="text-accent">pump.fun link</strong>, and start
              increasing your token&apos;s volume with minimal effort.
            </p>
            <p>
              <strong className="text-accent">MicroPump Bot</strong> has
              it&apos;s own utility token &nbsp;
              <strong className="text-accent">$MICRO</strong> where token
              holders get a discount.
            </p>
            <p>
              <strong className="text-accent">MicroPump Bot</strong> is using
              the lowest fees on the market!
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="rounded-xl shadow-lg w-96 h-auto outline outline-primary"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;
