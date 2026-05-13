export function GayMenStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#078D70]"></div>
      <div className="flex-1 bg-[#26CEAA]"></div>
      <div className="flex-1 bg-[#98E8C1]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#7BADE2]"></div>
      <div className="flex-1 bg-[#5049CC]"></div>
      <div className="flex-1 bg-[#3D1A78]"></div>
    </div>
  )
}
