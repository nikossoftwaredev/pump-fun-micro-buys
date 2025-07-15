export const Stat = ({
  title,
  value,
  color,
}: {
  title: string;
  value: JSX.Element;
  color?: string;
}) => {
  return (
    <div className="stat glass-effect">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default Stat;
