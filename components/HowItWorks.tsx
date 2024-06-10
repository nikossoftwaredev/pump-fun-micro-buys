import { SectionTitle } from "./SectionTitle";
import Card from "./Card";
import { TELEGRAM_BOT_URL } from "@/data/config";

const HowItWorks = () => {
  return (
    <section id="usage">
      <SectionTitle title="Usage" />
      <Card className="w-full">
        <div className="card-body flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
          <div className="text-center">
            <ol className="mt-4 space-y-4 text-left list-decimal list-inside">
              <li>
                Open the Telegram bot:{" "}
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  className="text-accent font-bold"
                >
                  @MicroPumpBot
                </a>
              </li>

              <li>
                <strong className="text-accent">Unique wallet:</strong> The bot
                will automatically generate a wallet for you.
              </li>
              <li>
                <strong className="text-accent">Add funds:</strong> Deposit
                sufficient funds to cover transaction fees and bump costs. Even
                0.1 sol is enough for many txns.
              </li>
              <li>
                <strong className="text-accent">Paste link:</strong> Paste the
                CA or the pump.fun link.
              </li>
              <li>
                <strong className="text-accent">Start Bumping:</strong> Click
                the &quot;Start Bumping&quot; button. The bot will commence
                automated micro-transactions, enhancing your token&apos;s
                visibility.
              </li>
            </ol>
          </div>
          <div>
            <img
              src="/images/tx.png"
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
