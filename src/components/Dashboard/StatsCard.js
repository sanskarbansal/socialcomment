import React from "react";

const data = [
    {
        title: "User Reached",
        share: "+3.59",
        value: "7957",
    },
    {
        title: "Referals",
        share: "+9.01",
        value: "0662",
    },
    {
        title: "Shares",
        share: "+39.18",
        value: "1478",
    },
    {
        title: "Applications",
        share: "+12.04",
        value: "0564",
    },
];

export default function StatsCard() {
    return (
        <div className="chart--container df fdc bs">
            <div className="df" style={{ justifyContent: "space-between" }}>
                <h4>Referals and Campaign Stats</h4>
                <div>
                    <h4 style={{ color: "#B55159" }}>40 Campaigns Sent in Total</h4>
                    <h4>4 Companies Sent in last month</h4>
                </div>
            </div>
            <div className="df stats--container">
                {data.map(({ title, share, value }) => (
                    <div key={title} className="df aic fdc">
                        <span style={{ fontSize: 10, fontWeight: "bold" }}>{title}</span>
                        <h3 style={{ fontSize: 10, fontWeight: "light" }} className="primary">
                            {share}
                        </h3>
                        <h1 style={{ fontSize: 16, fontWeight: "400" }}>{value}</h1>
                    </div>
                ))}
            </div>
            <div className="campaign--buttons df">
                <button style={{ background: "#009FFF" }}>Start a new campaign</button>
                <button style={{ background: "#FF3658" }}>Pause all running campaign</button>
            </div>
        </div>
    );
}
