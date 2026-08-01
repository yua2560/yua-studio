type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="font-display text-sm font-semibold tracking-widest text-brand-navy-500 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold text-brand-navy-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
