import { GRADIENT_STYLE } from "@/data/config";

export const SectionTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="w-full flex justify-center">
      <h2 className={`my-4 ${GRADIENT_STYLE} uppercase  ${className}`}>
        {title}
      </h2>
    </div>
  );
};
