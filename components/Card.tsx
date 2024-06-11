const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`card bg-base-300 shadow-xl outline outline-accent ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
