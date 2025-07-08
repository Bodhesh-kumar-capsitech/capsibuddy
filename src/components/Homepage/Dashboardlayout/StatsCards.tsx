import React from "react";

interface startItem {
    bg: string,
    border: string,
    title: string,
    value: string,
    percentage: string,
    valIcon: string,
    subtitle: string,
    icon: string
}

const stats: startItem[] = [
    {
        bg: "#F6F5FF",
        border: "#CAC2FF",
        title: "Total Customer",
        value: "$81.000",
        percentage: "1.5%",
        valIcon: "/top.png",
        subtitle: "From last week",
        icon: "/icons/icon1.png",
    },
    {
        bg: "#FFF7F5",
        border: "#FFD0C2",
        title: "Total Customer",
        value: "$121.000",
        percentage: "2.1%",
        valIcon: "/top.png",
        subtitle: "From last week",
        icon: "/icons/icon2.png",
    },
    {
        bg: "#F5FFFA",
        border: "#C6E7D5",
        title: "Total Transactions",
        value: "12.000",
        percentage: "0.8%",
        valIcon: "/top.png",
        subtitle: "From last week",
        icon: "/icons/icon3.png",
    },
    {
        bg: "#F0F9FF",
        border: "#C2E7FF",
        title: "Total Product",
        value: "5.000",
        percentage: "0.5%",
        valIcon: "/down.png",
        subtitle: "From last week",
        icon: "/icons/icon4.png",
    },
];

const StatsCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 !figtree-custom ">
            {stats.map((item, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: item.bg,
                        border: `1px solid ${item.border}`,
                    }}
                    className="rounded-xl p-2"
                >
                    {/* Top div */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={`${item.icon}`} className="w-8 sm:w-10 h-8 sm:h-10" alt="" />
                            <h4 className="text-[0.8rem] sm:text-[1rem] font-medium text-[#454545] ml-1">
                                {item.title}
                            </h4>
                        </div>
                        <img src="/arrow.png" className="h-4 sm:h-6 w-4 sm:w-6" alt="" />
                    </div>

                    {/* Bottom div */}
                    <div className="flex justify-between items-end">
                        <p className="text-sm sm:text-xl font-semibold text-gray-800">
                            {item.value}
                        </p>
                        <div className="flex flex-col flex-wrap items-end">
                            <span className="text-[#04910C] text-xs sm:text-sm font-medium flex gap-1">
                                <img src={`${item.valIcon}`} alt="" />
                                {item.percentage}
                            </span>
                            <span className="text-[10px] sm:text-xs text-[#737373] font-normal">
                                {item.subtitle}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;