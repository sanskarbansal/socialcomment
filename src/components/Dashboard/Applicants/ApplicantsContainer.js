import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import CallIcon from "@material-ui/icons/Call";
import "./Applicants.css";

const applicants = [
    {
        name: "Sanskar",
        approvedBy: "Ramesh Kumar",
    },
    {
        name: "Aman Kumar",
        approvedBy: "Arvind Kumar",
    },
    {
        name: "Rupa Kumar",
        approvedBy: "Suresh Kumar",
    },
    {
        name: "Rishabh Kumar",
        approvedBy: "Sachin Kumar",
    },
    {
        name: "Mamta Kumar",
        approvedBy: "Amit Kumar",
    },
];

export default function ApplicantsContainer() {
    return (
        <div className="applicants--container df fdc">
            {applicants.map(({ name, approvedBy }) => (
                <div key={name} className="applicants__applicant df aic">
                    <AccountCircleIcon />

                    <div>
                        <h2>{name}</h2>
                        <span>
                            Approved By <span className="primary">{approvedBy}</span>
                        </span>
                    </div>
                    <MessageIcon />
                    <CallIcon />
                </div>
            ))}
        </div>
    );
}
