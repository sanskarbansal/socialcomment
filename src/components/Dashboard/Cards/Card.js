import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { Doughnut } from "react-chartjs-2";
import "./Card.css";

export default function Card({ heading, width, height, data, colors, elevation, change, totalApplicants }) {
    console.log(data);
    return (
        <div className={`card--container df fdc bs ${elevation ? "card--container__elevated" : ""}`}>
            <div className="df aic">
                <span>{heading}</span>
                <button>
                    <MoreHorizIcon />
                </button>
            </div>
            <div className="card--container__content df">
                <div>
                    <h1>{totalApplicants}</h1>
                    <br />
                    <span className={`${elevation ? "" : "secondary"}`}>
                        {change[0] === "+" ? <TrendingUpIcon /> : <TrendingDownIcon />}
                        {change}
                    </span>
                </div>
                <Doughnut
                    data={data}
                    width={50}
                    height={50}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        cutout: 15,
                    }}
                />
            </div>
        </div>
    );
}
