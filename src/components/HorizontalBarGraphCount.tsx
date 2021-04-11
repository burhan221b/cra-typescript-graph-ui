import React, { CSSProperties, useEffect } from 'react';
import '../styles/HorizontalBarGraphCount.css';


export interface BarFeatures {
    count: number,
    color?: string,
    label?: string
}

export interface BarProps {
    count: number,
    color?: string,
    index: number,
    label?: string
}

export interface HorizontalBarGraphCountProps {
    data: BarFeatures[]
}

// Reference :: https://css-tricks.com/how-to-make-charts-with-svg/
const HorizontalBarGraphCount: React.FunctionComponent<HorizontalBarGraphCountProps> = (props) => {
    const { data } = props;
    useEffect(() => {
        var rect = document.querySelectorAll("rect");

        function toggleComplete(rect: any) {
            let i = 0;
            for (let bar of rect) {
                console.log(bar)
                setTimeout(() => {
                    const data_width = bar.getAttribute('data-width');
                    console.log(data_width)
                    bar.style.width = data_width;
                }, 500 * i)
                i++;
            }
        }
        toggleComplete(rect)
    }, [])

    return (
        <figure>
            <figcaption>A graph that shows the number of fruit collected</figcaption>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="chart"
                width="420" height="150" aria-labelledby="title" role="img">
                <title id="title">A bart chart showing information</title>
                {data.map((plot, index) => {
                    const { count, color, label } = plot
                    return (<Bar key={index} count={count} color={color} index={index} label={label} />)
                })}

            </svg>
        </figure>
    );
}

export default HorizontalBarGraphCount;

const Bar: React.FunctionComponent<BarProps> = (props) => {
    const { count, color, index, label } = props;
    const data_width = count * 10;
    const rect_y = index * 20;
    const text_x = data_width + 5;
    const text_y = index === 0 ? 9.5 : 28 + (20 * (index - 1));
    const rect_fill = color ? color : "#aaa";
    const text_label = label ? label : '';
    return (
        <g className="bar">
            <rect className="setup" data-width={data_width} height="19" y={rect_y} fill={rect_fill}></rect>
            <text x={text_x} y={text_y} dy=".35em">{count} {text_label}</text>
        </g>
    )
}