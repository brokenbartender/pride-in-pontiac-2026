export function PrideStripe({ className, orientation = "horizontal" }: { className?: string, orientation?: "horizontal" | "vertical" }) {
  const gradient = orientation === "horizontal" 
    ? 'linear-gradient(to right, #E40303 0%, #E40303 16.66%, #FF8C00 16.66%, #FF8C00 33.33%, #FFED00 33.33%, #FFED00 50%, #008026 50%, #008026 66.66%, #004DFF 66.66%, #004DFF 83.33%, #750787 83.33%, #750787 100%)'
    : 'linear-gradient(to bottom, #E40303 0%, #E40303 16.66%, #FF8C00 16.66%, #FF8C00 33.33%, #FFED00 33.33%, #FFED00 50%, #008026 50%, #008026 66.66%, #004DFF 66.66%, #004DFF 83.33%, #750787 83.33%, #750787 100%)';

  return (
    <div
      className={className}
      style={{ background: gradient }}
    />
  );
}
