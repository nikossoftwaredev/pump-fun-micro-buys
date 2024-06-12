import { title } from "process";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { GiPresent } from "react-icons/gi";

const GradientCard = ({
  title,
  icon,
  description,
  value,
}: {
  title: string;
  description?: string;
  icon: JSX.Element;
  value: string;
}) => (
  <div
    className="
card

bg-gradient-to-br
from-solana-purple
to-solana-green

before:absolute
before:inset-0
before:h-full
before:w-full
before:bg-gradient-to-br
before:from-solana-purple
before:to-solana-green
before:blur-md
before:translate-x-3
before:translate-y-5
"
  >
    <div className="z-10 stat text-base-content">
      <div className="stat-figure text-accent ">{icon}</div>
      <div className="stat-title text-base-content">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-desc text-base-content">{description}</div>
    </div>
  </div>
);

const StatsSection = () => {
  return (
    <section id="stats" className="grid  grid-cols-1  gap-16 ">
      {[
        {
          title: "Service fees",
          icon: <AiFillDollarCircle size={40} />,
          value: "0.001 SOL",
          description: "Lowest fees on the market",
        },
        {
          title: "Transaction fees",
          icon: <BiTransfer size={40} />,
          value: "0.0005 SOL",
          description: "Fully configurable",
        },
        {
          title: "Fees Discount",
          icon: <GiPresent size={40} />,
          value: "100%",
          description: "Token holders don't pay any fees",
        },
      ].map((props, i) => (
        <GradientCard key={i} {...props} />
      ))}
    </section>
  );
};

export default StatsSection;
