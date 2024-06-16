import { SectionTitle } from "./SectionTitle";
import Card from "./Card";
import { TELEGRAM_BOT_URL } from "@/data/config";

const steps = [
  {
    title: "Launch the bot",
    link: TELEGRAM_BOT_URL,
  },

  {
    title: "Add funds",
    description:
      "Deposit sufficient funds to cover transaction fees and bump costs. Even 0.1 sol is enough for many txns.",
  },

  {
    title: "Paste link",
    description: "Paste the CA or the pump.fun link.",
  },
  {
    title: "Configure settings",
    description:
      "Set up the number of buys and sells to make and the priority fee",
  },
  {
    title: "Click Start bumping",
    description:
      "The bot will automatically start making 0.02 buy/sells to the",
  },
];

const HowItWorks = () => {
  return (
    <section id="usage">
      <Card className="w-full">
        <div className="card-body flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
          <SectionTitle title="Usage" />
          <ul className="steps steps-vertical">
            {steps.map((step) => (
              <li key={step.title} className="step step-primary">
                <span>
                  <strong className="text-accent">{step.title}:</strong>
                  &nbsp;
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      className="text-primary font-bold"
                    >
                      @MicroPumpBot
                    </a>
                  )}
                  {step.description}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <img
              src="/images/promo.gif"
              alt="Tx"
              className="rounded-lg shadow-lg w-full h-auto mb-4"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HowItWorks;
