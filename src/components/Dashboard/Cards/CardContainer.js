import React from "react";
import Card from "./Card";

const data = {
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],

            borderWidth: 1,
        },
    ],
};
export default function CardContainer() {
    return (
        <div className="df cards">
            <Card
                heading="Total Applicants"
                change="+3.59%"
                totalApplicants={7596}
                width={80}
                data={{
                    datasets: [
                        {
                            data: [80, 20],
                            backgroundColor: ["#937ECC", "#414649"],
                            borderWidth: 0,
                        },
                    ],
                }}
                height={80}
            />
            <Card
                heading="Shortlisted Candidates"
                change="+0.6%"
                width={80}
                totalApplicants={4658}
                elevation
                data={{
                    datasets: [
                        {
                            data: [60, 40],
                            backgroundColor: ["#D4FEFF", "#414649"],
                            borderWidth: 0,
                        },
                    ],
                }}
                height={80}
            />
            <Card
                heading="Total Applicants"
                change="-0.4%"
                totalApplicants={1501}
                width={80}
                height={80}
                data={{
                    datasets: [
                        {
                            data: [40, 60],
                            backgroundColor: ["#D56677", "#414649"],
                            borderWidth: 0,
                        },
                    ],
                }}
            />
        </div>
    );
}
