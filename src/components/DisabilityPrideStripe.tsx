export function DisabilityPrideStripe({ className = "" }: { className?: string }) {
  // Uses colors from the visually-safe Disability Pride Flag
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-[2] bg-[#333333]"></div>
      <div className="flex-1 bg-[#00A651]"></div>
      <div className="flex-1 bg-[#00AEEF]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#FFF200]"></div>
      <div className="flex-1 bg-[#ED1C24]"></div>
      <div className="flex-[2] bg-[#333333]"></div>
    </div>
  )
}
