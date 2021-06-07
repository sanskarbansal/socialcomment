import React, { Component } from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import DescriptionIcon from "@material-ui/icons/Description";
import FolderIcon from "@material-ui/icons/Folder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleIcon from "@material-ui/icons/People";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import SettingsIcon from "@material-ui/icons/Settings";
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.navLinks = [
            {
                path: "/",
                Component: () => <HomeIcon style={{ color: "white" }} />,
                description: "Home",
            },
            {
                path: "/a",
                Component: () => <EqualizerIcon style={{ color: "white" }} />,
                description: "Home",
            },
            {
                path: "/b",
                Component: () => <DescriptionIcon style={{ color: "white" }} />,
                description: "Document",
            },
            {
                path: "/c",
                Component: () => <FolderIcon style={{ color: "white" }} />,
                description: "Folders",
            },
            {
                path: "/d",
                Component: () => <ExitToAppIcon style={{ color: "white" }} />,
                description: "Exit",
            },
            {
                path: "/e",
                Component: () => <PeopleIcon style={{ color: "white" }} />,
                description: "Friends",
            },
            {
                path: "/f",
                Component: () => <CameraAltIcon style={{ color: "white" }} />,
                description: "Photos",
            },
            {
                path: "/g",
                Component: () => <SettingsIcon style={{ color: "white" }} />,
                description: "",
            },
        ];
    }
    render() {
        return (
            <div className="sidebar df fdc">
                {this.navLinks.map(({ path, Component, description }) => {
                    return (
                        <a href={path} className="sidebar__item df fdc jcc aic" key={path}>
                            {Component()}
                            <span className="sidebar--item__description">{description}</span>
                        </a>
                    );
                })}
            </div>
        );
    }
}
