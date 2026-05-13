export function BiStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-[2] bg-[#D60270]"></div>
      <div className="flex-[1] bg-[#9B4F96]"></div>
      <div className="flex-[2] bg-[#0038A8]"></div>
    </div>
  )
}
