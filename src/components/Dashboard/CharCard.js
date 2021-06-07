import React from "react";
import { Line } from "react-chartjs-2";

export default function CharCard({ data }) {
    return (
        <div className="chart--container df fdc bs aic">
            <div className="df">
                <span>Applications Recieved</span>
                <div>
                    <span>This Year</span>
                    <span>This Month</span>
                    <span>This Week</span>
                </div>
            </div>
            <Line
                data={data}
                width={500}
                height={180}
                style={{
                    marginTop: 40,
                }}
                options={{
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
}
