import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Anecdote from './Components/Anecdote';
import Button from './Components/Button';
import VoteStats from './Components/VoteStats';

const App = (props) => {
    
    const [selected, setSelected] = useState(0);
    const selectAnecdote = () => () => setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));

    let defaultVotes = {};
    props.anecdotes.forEach((anecdote, index) => {
        defaultVotes = {
            ...defaultVotes,
            [index]: 0,
        }
    });

    const [votes, setVote] = useState({
        ...defaultVotes,
    });

    const addVote = (anecdoteIndex) => () => setVote({...votes, [anecdoteIndex]: votes[anecdoteIndex] + 1});
   
    let indexOfMostPopular = 0;
    for(let i = 0; i < Object.keys(votes).length; i++) {
        if ( votes[i] > votes[indexOfMostPopular] ) {
            indexOfMostPopular = i;
        }
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote anecdote={props.anecdotes[selected]} voteCount={votes[selected]} />
          
            <Button handleClick={addVote(selected)} text="Vote" />
            <Button handleClick={selectAnecdote()} text="Next anecdote" />
           
            <VoteStats anecdote={props.anecdotes[indexOfMostPopular]} voteCount={votes[indexOfMostPopular]} />            
        </div>
    );
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

