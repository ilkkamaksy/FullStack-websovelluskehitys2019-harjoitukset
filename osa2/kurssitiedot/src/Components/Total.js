import React from 'react';

const Total = ({parts}) => {

    const exerciseCount = parts.reduce((acc, curr) => {
        return curr.exercises + acc;
    }, 0);

    return (
        <p><b>Number of exercises {exerciseCount}</b></p>
    );
}

export default Total;