export function PanStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#FF218C]"></div>
      <div className="flex-1 bg-[#FFD800]"></div>
      <div className="flex-1 bg-[#21B1FF]"></div>
    </div>
  )
}
