import React from 'react';
import Part from './Part';

const Content = (props) => {

    return (
        <div>
        {props.parts.map((part,index) => {
            return (
                <Part key={index} course={part} />
            );
        })}
        </div>
    );
} 

export default Content;