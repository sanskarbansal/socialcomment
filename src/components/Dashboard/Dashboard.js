import React, { Component } from "react";
import CardContainer from "./Cards/CardContainer";
import DashbaordTopRight from "./DashbaordTopRight";

import "./Dashboard.css";
import Heading from "./Heading";
import Sidebar from "./DashboardSidebar";

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
                        </main>

                        <Sidebar name={name} />
                    </div>
                </div>
            </>
        );
    }
}
