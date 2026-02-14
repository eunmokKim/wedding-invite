interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;  // ⭐ 추가
}

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={`section ${className ?? ''}`}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
