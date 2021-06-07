import React from "react";

const getDate = () => {
    const d = String(new Date()).split(" ");
    return d[1] + " " + d[2] + " " + d[3];
};

export default function Heading() {
    return (
        <div className="dashboard__heading">
            <h1>Dashboard</h1>
            <h3>
                {String(new Date()).split(" ")[0] + "day, "} <span className="primary">{getDate()}</span>
            </h3>
        </div>
    );
}
