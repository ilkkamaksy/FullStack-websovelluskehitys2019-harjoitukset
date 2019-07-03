import React from 'react';
import VoteCounter from './VoteCounter';

const Anecdote = ({anecdote, voteCount}) => (
    <div>
        <div>{anecdote}</div>
        <VoteCounter voteCount={voteCount} />
    </div>
);

export default Anecdote;