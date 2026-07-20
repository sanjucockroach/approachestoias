import type { LucideIcon } from "lucide-react";

export function GalleryVisual({
  icon: Icon,
  code,
  label,
}: {
  icon: LucideIcon;
  code: string;
  label: string;
}) {
  return (
    <div className="gallery-visual" role="img" aria-label={label}>
      <div className="gallery-visual-mark">
        <Icon className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
      </div>
      <span className="gallery-visual-code" aria-hidden="true">
        {code}
      </span>
    </div>
  );
}
