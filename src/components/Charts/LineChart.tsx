import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { NumberValue } from "d3";

interface LineChartProps {
  data: number[];
  color?: string;
  id: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data = [
    50, 50, 50, 50, 200, 200, 40, 40, 300, 300, 300, 300, 150, 80, 120, 90, 200,
    200, 200, 150,
  ],
  color = "blue",
  id = "line-chart",
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update chart dimensions based on the parent div
    const updateDimensions = () => {
      if (parentRef.current) {
        const { clientWidth, clientHeight } = parentRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    // Initialize chart size on mount
    updateDimensions();

    // Handle resize using ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const { width, height } = dimensions;
    const margin = { top: 6, right: 6, bottom: 12, left: 6 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("id", id);

    // Clear previous content
    svg.selectAll("*").remove();

    // X scale
    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, chartWidth + margin.left]);

    // Y scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data) as NumberValue])
      .range([chartHeight + margin.top, margin.top]);

    // Create a unique gradient id using the chart id
    const gradientId = `${id}-gradient`;
    // Create gradient for the area under the line
    const defs = svg.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", gradientId) // Use the unique gradient id
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", color)
      .attr("stop-opacity", 0.5);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", color)
      .attr("stop-opacity", 0.1);

    const area: d3.Area<[number, number]> = d3
      .area<[number, number]>()
      .x((d, i) => x(i))
      .y0(chartHeight + margin.top) // Starts from y=0 (x-axis)
      .y1((d) => y(Number(d)))
      .curve(d3.curveCardinal);

    const line: d3.Line<[number, number]> = d3
      .line<[number, number]>()
      .x((d, i) => x(i))
      .y((d) => y(Number(d)))
      .curve(d3.curveCardinal);

    // Append the gradient-filled area under the line with transition
    svg
      .append("path")
      .datum(data)
      .attr("fill", `url(#${gradientId})`)
      .attr("d", area as unknown as string)
      .attr("opacity", 0) // Start hidden
      .transition()
      .duration(1000)
      .delay(200)
      .attr("opacity", 1); // Fade in the area

    // Append the line path with transition
    const linePath = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1.5)
      .attr("d", line as unknown as string);

    // Apply line drawing animation
    const totalLength = linePath.node()?.getTotalLength() ?? 0;

    linePath
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(1000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // Add a 16px square with a transparent 2px border at the end of the line
    const lastPointX = x(data.length - 1); // X-coordinate of the last data point
    const lastPointY = y(data[data.length - 1]); // Y-coordinate of the last data point

    svg
      .append("rect")
      .attr("x", lastPointX - 3) // Center the square on the last data point
      .attr("y", lastPointY) // Center the square on the last data point
      .attr("width", 6)
      .attr("height", 6)
      .attr("rx", 2) // Rounded corners
      .attr("ry", 2) // Rounded corners
      .attr("fill", color)
      .attr("stroke", "white") // Transparent border
      .attr("stroke-width", 1);
  }, [data, color, dimensions, id]);

  return (
    <div ref={parentRef} style={{ height: "100%" }} className="">
      <svg ref={svgRef} />
    </div>
  );
};

export default LineChart;
