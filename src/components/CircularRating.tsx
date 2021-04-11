import React, { CSSProperties, useEffect } from 'react';
import '../styles/CircularRating.css';

const ratingColorFns = (rating: number) => {
    if (rating === 100) return 'blue';
    if (rating >= 80) return 'green';
    if (rating >= 70) return 'yellow';
    if (rating >= 60) return 'orange';
    else return 'red';
}

const ratingColorFnsMinor = (rating: number) => {
    if (rating === 5) return 'blue';
    if (rating === 4) return 'green';
    if (rating === 3) return 'yellow';
    if (rating === 2) return 'orange';
    else return 'red';
}

export interface CircularRatingProps {
    rating: number,
    maxRating: number
}

// Reference :: https://codepen.io/sergiopedercini/pen/jmKdbj/
const CircularRating: React.FunctionComponent<CircularRatingProps> = (props) => {
    const { rating, maxRating } = props
    // useEffect(()=>{

    // },[rating])
    const ratingColor = maxRating === 100 ? ratingColorFns(rating) : ratingColorFnsMinor(rating)
    return (
        <div className="flex-wrapper">
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className={`circular-chart ${ratingColor}`}>
                    <path className="circle-bg"
                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        // stroke-dasharray={`${rating}, 100`}
                        strokeDasharray={`${maxRating !== 100 ? rating * (100 / maxRating) : rating}, ${maxRating !== 100 ? maxRating * (100 / maxRating) : maxRating}`}
                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">{rating}</text>
                </svg>
            </div>
        </div>
    );
}

export default CircularRating;

