import React from 'react';

const Part = (props) => {
    const { course } = props;

    return (
        <p>{course.name} {course.exercises}</p>
    );
}

export default Part;