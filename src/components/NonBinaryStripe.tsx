export function NonBinaryStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex-1 bg-[#FCF434]"></div>
      <div className="flex-1 bg-[#FFFFFF]"></div>
      <div className="flex-1 bg-[#9C59D1]"></div>
      <div className="flex-1 bg-[#2C2C2C]"></div>
    </div>
  )
}
