export const SectionTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={`my-4 text-primary text-4xl font-extrabold text-center uppercase ${className}`}
    >
      {title}
    </h2>
  );
};
