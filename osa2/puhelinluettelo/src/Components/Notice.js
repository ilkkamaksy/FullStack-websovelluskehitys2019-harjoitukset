import React from 'react';

const Notice = ({notice}) => {

    if ( typeof notice.message === 'undefined' ) {
        return null;
    }

    return (
        <div className={`notice notice-${notice.type}`}>
            {notice.message}
        </div>
    );
} 

export default Notice;