import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Button from './Components/Button';
import Statistics from './Components/Statistics';

const App = () =>  {

    const title = 'give feedback';
    const statsTitle = 'Statistics';

    const [reviews, setReviews] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const addReview = (reviewType, value) => () => setReviews({
        ...reviews,
        [reviewType]: value,
    });

    return (
        <div>
            <Header title={title} />
            {Object.keys(reviews).map(review => {
                return (
                    <Button key={review} handleClick={addReview(review, reviews[review] + 1)} text={review} />
                );
            })}
            <Statistics reviews={reviews} title={statsTitle} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

