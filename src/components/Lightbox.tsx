import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";

export function LightboxTrigger({
  src,
  alt,
  className,
  imgClassName,
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      className={`group relative block w-full cursor-zoom-in text-left ${className ?? ""}`}
      aria-label={`Enlarge: ${alt}`}
    >
      <img src={src} alt={alt} className={`w-full h-full object-cover ${imgClassName ?? ""}`} />
      <span className="absolute inset-0 bg-pride-black/0 group-hover:bg-pride-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="bg-pride-white text-pride-black rounded-full p-3 shadow-lg">
          <ZoomIn size={20} />
        </span>
      </span>
    </button>
  );
}

export function Lightbox({
  image,
  onClose,
}: {
  image: { src: string; alt: string } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [image, onClose]);

  if (!image) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-pride-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-8 md:right-8 text-pride-white bg-pride-white/10 hover:bg-pride-white/20 rounded-full p-3 transition-colors z-10"
      >
        <X size={22} />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain shadow-2xl cursor-default"
      />
    </div>,
    document.body
  );
}
