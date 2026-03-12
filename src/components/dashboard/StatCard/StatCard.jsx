import "./StatCard.css"

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
            className="stat-card"
            style={{
                border: `1px solid ${borderColor}`,
                background: bgColor
            }}
        >

            <div className="stat-top">

        <div className="icon-box">
                    {icon}
                </div>

                <span className="badge">
                    {badgeText}
                </span>

            </div>

            <div className="stat-content">

                <p className="stat-title">{title}</p>

                <h2 className="stat-value">{value}</h2>

            </div>

        </div>

    )

}

export default StatCard