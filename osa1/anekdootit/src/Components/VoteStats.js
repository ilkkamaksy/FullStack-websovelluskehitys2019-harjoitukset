import React from 'react';
import VoteCounter from './VoteCounter';

const VoteStats = ({anecdote, voteCount}) => {

    return (
        <div>
            <h2>Anecdote with most votes</h2>
            <div>{anecdote}</div>
            <VoteCounter voteCount={voteCount} />       
        </div>
    );
}

export default VoteStats;