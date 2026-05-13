export function LeatherStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex w-full ${className}`}>
      {/* Red heart representation on the left */}
      <div className="absolute top-0 left-0 h-full w-[8%] bg-[#E50024] z-10 border-r-2 border-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}></div>
      <div className="flex-1 bg-[#000000]"></div>
      <div className="flex-1 bg-[#2626AC]"></div>
      <div className="flex-1 bg-[#000000]"></div>
      <div className="flex-1 bg-[#2626AC]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#2626AC]"></div>
      <div className="flex-1 bg-[#000000]"></div>
      <div className="flex-1 bg-[#2626AC]"></div>
      <div className="flex-1 bg-[#000000]"></div>
    </div>
  )
}
