import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./DashboardSidebar.css";

import ApplicantsContainer from "./Applicants/ApplicantsContainer";
export default function Sidebar({ name }) {
    return (
        <>
            <aside className="dashboard--content__sidebar">
                <div className="sidebar--header bs">
                    <p>Hello, {name}</p>
                    <p>You have 8 New Applications Today</p>
                    <img src="/sidebar.png" alt="Side Bar" />
                    <button>
                        <ArrowRightAltIcon />
                    </button>
                </div>
                <div className="applicants">
                    <div className="df aic">
                        <h1>New Applicants</h1>
                        <ChevronRightIcon />
                    </div>
                    <ApplicantsContainer />
                </div>
            </aside>
        </>
    );
}
