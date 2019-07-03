import React from 'react';

const Total = ({parts}) => {

    const exerciseCount = parts.reduce((acc, curr) => {
        return curr.exercises + acc;
    }, 0);

    return (
        <p>Number of exercises {exerciseCount}</p>
    );
}

export default Total;