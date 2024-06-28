import { SectionTitle } from "./SectionTitle";
import Card from "./Card";
import { TELEGRAM_BOT_URL } from "@/data/config";

const steps = [
  {
    title: "Launch the bot",
    link: TELEGRAM_BOT_URL,
    description: "Click on Try the Bot above. Or use this link ",
  },

  {
    title: "Add funds",
    description:
      "Deposit sufficient funds to cover transaction fees and bump costs, 0.1 sol is enough for 250 txns.",
  },

  {
    title: "Paste link",
    description: "Paste the pump.fun link or the contract address (CA).",
  },
  {
    title: "Configure settings",
    description:
      "Set up the number of buys/sells, amount to buy/sell and priority fee",
  },
  {
    title: "Click Start bumping",
    description:
      "The bot will automatically start making small buys/sells making it trend on the bump page.",
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
                  {step.description}
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      className="text-primary font-bold"
                    >
                      @micropump_bot
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/images/promo.gif"
          alt="Tx"
          className="rounded-lg shadow-lg w-full h-auto "
        />
      </Card>
    </section>
  );
};

export default HowItWorks;
