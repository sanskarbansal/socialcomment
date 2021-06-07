import React from "react";
import ProgressBar from "./ProgressBar";
const progressData = [
    {
        title: "Applications",
        color: "#A2D2F1",
        share: 40,
    },
    {
        title: "Shortlisted",
        color: "#0097E8",
        share: 80,
    },
    {
        title: "Rejected",
        color: "#FF495C",
        share: 60,
    },
    {
        title: "On Hold",
        color: "#D9C0E2",
        share: 20,
    },
    {
        title: "Approved",
        color: "#6247AF",
        share: 50,
    },
];

export default function ProgressList() {
    return (
        <>
            <h2 style={{ margin: "1rem" }}>Total Applications</h2>
            <div className="df fdc" style={{ height: "60%", justifyContent: "space-between" }}>
                {progressData.map(({ title, color, share }) => (
                    <ProgressBar key={title} title={title} color={color} percentage={share} />
                ))}
            </div>
        </>
    );
}
