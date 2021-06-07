import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function DashbaordTopRight({ name }) {
    return (
        <div className="dashboard--top df aic">
            <NotificationsIcon />
            <span>{name}</span>
            <AccountCircleIcon />
        </div>
    );
}
