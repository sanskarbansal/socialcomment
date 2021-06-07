import React from "react";
import Card from "./Card";
export default function CardContainer() {
    return (
        <div className="df cards">
            <Card
                heading="Total Applicants"
                change="+3.59%"
                totalApplicants={7596}
                width={80}
                data={[{ value: 80 }, { value: 20 }]}
                height={80}
                colors={["#937ECC", "#414649"]}
            />
            <Card
                heading="Shortlisted Candidates"
                change="+0.6%"
                width={80}
                totalApplicants={4658}
                elevation
                data={[{ value: 40 }, { value: 20 }]}
                height={80}
                colors={["#D4FEFF", "#414649"]}
            />
            <Card
                heading="Total Applicants"
                change="-0.4%"
                totalApplicants={1501}
                width={80}
                data={[{ value: 60 }, { value: 20 }]}
                height={80}
                colors={["#D56677", "#414649"]}
            />
        </div>
    );
}
