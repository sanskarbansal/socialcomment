import React, { createRef, useEffect } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import * as d3 from "d3";
import "./Card.css";

export default function Card({ heading, width, height, colors, data, elevation, change, totalApplicants }) {
    const svgRef = createRef();
    useEffect(() => {
        const svg = d3.select(svgRef.current).attr("width", width).attr("height", height);

        const radius = width / 2;
        const g = svg.append("g").attr("transform", `translate(${radius}, ${radius})`).attr("width", width).attr("height", width);
        g.append("text")
            .attr("text-anchor", "middle")
            .style("fill", "white")
            .style("font-size", 10)
            .style("font-weight", "bolder")
            .attr("transform", "translate(0, 3)")
            .text(`+${data[0].value}%`);
        const color = d3.scaleOrdinal(colors);

        const pie = d3
            .pie()
            .sort(null)
            .value((d) => d.value);

        const path = d3
            .arc()
            .outerRadius(radius)
            .innerRadius(radius - 7);
        const pies = g.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");

        pies.append("path")
            .attr("d", path)
            .attr("fill", (d) => color(d.data.value));
    }, [colors, data, height, svgRef, width]);

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
                <svg ref={svgRef} />
            </div>
        </div>
    );
}
