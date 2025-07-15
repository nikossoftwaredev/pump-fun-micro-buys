import Loader from "./Loader";

interface GradientCardProps {
  title: string;
  icon: JSX.Element;
  description?: string;
  value: string;
  loading?: boolean;
}

const GradientCard = ({
  title,
  icon,
  description,
  value,
  loading,
}: GradientCardProps) => (
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
before:translate-x-1
before:translate-y-2
relative
"
  >
   
    <div className="z-10 stat text-base-content">
      <div className="stat-figure text-accent ">{icon}</div>
      <div className="stat-title text-base-content">{title}</div>
      <div className="stat-value">
        {value} {loading && <Loader />}
      </div>
      <div className="stat-desc text-base-content">{description}</div>
    </div>
  </div>
);

export default GradientCard;