import React from 'react';
import NoReviews from './NoReviews';
import Statistic from './Statistic';

const Statistics = ({reviews, title}) => {

    let reviewsCount = 0;
    Object.keys(reviews).forEach(reviewType => {
        reviewsCount += reviews[reviewType];
    });

    if ( reviewsCount === 0 ) {
        return <NoReviews title={title} />
    }
   
    return (
        <div>
            <h2>{title}</h2>
            <table>
                <tbody>
                {Object.keys(reviews).map(reviewType => {
                    return (
                        <Statistic key={"statistic-" + reviewType} text={reviewType} value={reviews[reviewType]} />
                    );
                })}
                <Statistic text="All" value={reviewsCount} />
                <Statistic text="Average" value={(reviews.good+reviews.bad*-1)/reviewsCount} />
                <Statistic text="Positive" value={reviews.good/reviewsCount*100} />
                </tbody>
            </table>
        </div>
    );
}


export default Statistics;