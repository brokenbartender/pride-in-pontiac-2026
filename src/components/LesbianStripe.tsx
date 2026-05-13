export function LesbianStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#D52D00]"></div>
      <div className="flex-1 bg-[#EF7627]"></div>
      <div className="flex-1 bg-[#FF9A56]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#D162A4]"></div>
      <div className="flex-1 bg-[#B55690]"></div>
      <div className="flex-1 bg-[#A30262]"></div>
    </div>
  )
}
