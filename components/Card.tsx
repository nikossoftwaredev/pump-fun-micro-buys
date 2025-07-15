const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`card glass-effect-strong shadow-xl outline outline-accent ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
