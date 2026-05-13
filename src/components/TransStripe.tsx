export function TransStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#55CDFC]"></div>
      <div className="flex-1 bg-[#F7A8B8]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#F7A8B8]"></div>
      <div className="flex-1 bg-[#55CDFC]"></div>
    </div>
  )
}
