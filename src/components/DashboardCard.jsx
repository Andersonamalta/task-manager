const DashboardCard = ({ icon, mainText, secondaryText }) => {
  return (
    <div className="flex h-37.5 flex-col items-center justify-center gap-1 rounded-[10px] bg-white">
      <div className="flex items-center gap-2">
        <span className="text-[#00ADB5]">{icon}</span>
        <p className="text-2xl font-semibold text-[#35383E]">{mainText}</p>
      </div>
      <span>{secondaryText}</span>
    </div>
  )
}

export default DashboardCard
