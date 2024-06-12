export const Stat = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color?: string;
}) => {
  return (
    <div className="stat bg-base-200">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default Stat;
