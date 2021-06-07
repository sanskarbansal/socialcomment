import React from "react";
import "./ProgressBar.css";
export default function ProgressBar({ color, percentage, title }) {
    return (
        <div className="df aic progressbar ">
            <div style={{ background: color, width: "8px", height: "8px", borderRadius: "100%" }}></div>
            <span style={{ color: color, width: "30%" }}>{title}</span>
            <div className="progressbar--container">
                <div className="progressbar--container__progress" style={{ width: `${percentage}%`, background: color }}></div>
            </div>
        </div>
    );
}
