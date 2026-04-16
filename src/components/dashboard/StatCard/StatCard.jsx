function StatCard({
    title,
    value,
    icon,
    badgeText,
    borderColor,
    iconBg,
    bgColor
}) {

    return (
        <div
            className="w-[258px] h-[140px] rounded-[20px] p-[16px_20px] shadow-stat flex flex-col justify-between"
            style={{
                border: `1px solid ${borderColor}`,
                background: bgColor
            }}
        >
            <div className="flex justify-between items-center">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF1F9] shadow-[0px_2px_8px_rgba(0,0,0,0.195)] flex items-center justify-center [&>img]:w-[18px]">
                    {icon}
                </div>

                <span className="bg-[#EDEFF4] text-black text-[12px] px-[10px] py-[4px] rounded-[20px]">
                    {badgeText}
                </span>
            </div>

            <div className="stat-content">
                <p className="text-[14px] text-[#4D4747]">{title}</p>
                <h2 className="text-[28px] font-bold text-[#333]">{value}</h2>
            </div>
        </div>
    )
}

export default StatCard