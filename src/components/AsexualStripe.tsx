export function AsexualStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#000000]"></div>
      <div className="flex-1 bg-[#A3A3A3]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#800080]"></div>
    </div>
  )
}
