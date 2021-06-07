import React, { Component } from "react";
import CardContainer from "./Cards/CardContainer";
import DashbaordTopRight from "./DashbaordTopRight";
import "./Dashboard.css";
import Heading from "./Heading";
import Sidebar from "./DashboardSidebar";
import CharCard from "./CharCard";
import ProgressList from "./ProgressList/ProgressList";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import StatsCard from "./StatsCard";
import { Doughnut } from "react-chartjs-2";
const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
    datasets: [
        {
            data: [1, 2, 3, 10, 6, 3],
            backgroundColor: ["#482229", "#48222985", "#48222947"],
            fill: true,
            borderColor: "white",
            tension: 0.3,
        },
    ],
};

const dataPositions = {
    datasets: [
        {
            labels: "Open Positions",
            data: [45, 25, 30],
            backgroundColor: ["#FF3658", "#693EC1", "#00A0FF"],
            hoverOffset: [10, 10, 10],
            borderWidth: 0,
        },
    ],
};

export default class Dashboard extends Component {
    render() {
        const name = "John Bayer";
        return (
            <>
                <DashbaordTopRight name={name} />
                <div className="dashboard">
                    <Heading />
                    <div className="df  dashboard--content ">
                        <main>
                            <CardContainer />
                            <div className="fourcard__container">
                                <CharCard data={data} />
                                <div className="bs" style={{ borderRadius: "8px" }}>
                                    <ProgressList />
                                </div>
                                <StatsCard />
                                <div className="bs" style={{ borderRadius: "8px", padding: "1rem" }}>
                                    <div className="df" style={{ justifyContent: "space-between" }}>
                                        <span>Open Positions By Department</span>
                                        <button style={{ border: "none", background: "transparent", color: "white" }}>
                                            <MoreHorizIcon />
                                        </button>
                                    </div>
                                    <Doughnut
                                        data={dataPositions}
                                        width={200}
                                        height={200}
                                        style={{
                                            margin: "0 auto",
                                        }}
                                        options={{
                                            responsive: false,
                                            maintainAspectRatio: false,
                                            cutout: 50,
                                        }}
                                    />
                                </div>
                            </div>
                        </main>
                        <Sidebar name={name} />
                    </div>
                </div>
            </>
        );
    }
}
