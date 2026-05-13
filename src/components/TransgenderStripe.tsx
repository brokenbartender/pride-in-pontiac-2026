export function TransgenderStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#5BCEFA]"></div>
      <div className="flex-1 bg-[#F5A9B8]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#F5A9B8]"></div>
      <div className="flex-1 bg-[#5BCEFA]"></div>
    </div>
  )
}
