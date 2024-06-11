import { SectionTitle } from "./SectionTitle";
import Card from "./Card";

const AboutSection = () => {
  return (
    <section id="about">
      <Card className="w-full">
        <div className="card-body flex flex-row flex-wrap items-center justify-center gap-8">
          <SectionTitle title="About" />
          <div className="max-w-xl text-center">
            <h3 className="text-lg font-semibold">
              Welcome to <strong className="text-accent">MicroPump Bot</strong>!
            </h3>
            <p className="mt-2">
              <strong className="text-accent">MicroPump Bot</strong> is a
              specialized Telegram bot designed to enhance your token&apos;s
              visibility by boosting its volume during{" "}
              <strong className="text-accent">pump events</strong> on{" "}
              <strong className="text-accent">pump.fun</strong>. This bot is not
              only user-friendly but also ensures security and efficiency,
              making it an ideal choice for traders looking to capitalize on
              market opportunities.
            </p>
            <p className="mt-2">
              Easily configure your{" "}
              <strong className="text-accent">transaction fees</strong>, paste
              the <strong className="text-accent">CA</strong> or the{" "}
              <strong className="text-accent">Pump Fun link</strong>, and start
              increasing your token&apos;s volume with minimal effort.{" "}
              <strong className="text-accent">MicroPump Bot</strong> is your
              go-to tool for gaining that competitive edge in the fast-paced
              world of cryptocurrency trading.
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
