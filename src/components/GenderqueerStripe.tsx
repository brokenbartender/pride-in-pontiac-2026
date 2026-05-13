export function GenderqueerStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#B57EDC]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#4A8123]"></div>
    </div>
  )
}
