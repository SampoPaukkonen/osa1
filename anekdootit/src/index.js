import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

const Button = ({text, handler}) => (
    <button onClick={handler}>{text}</button>
)

const maxIndex = (values) =>  {
    let a = 0
    for(let i=1; i<values.length; i++) {
        if (values[i] > values[a]) {
            a = i
        }
    }
    return a
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const voteSelected = () => {
        const copy = [...votes]
        copy[selected] += 1
        return (
            copy
        )
    }
    return (
        <>
        <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        </div>
        <div>
        <p>has {votes[selected]} votes</p>
        <Button text="next anecdote" handler={() => setSelected(getRandomInt(anecdotes.length))}/>
        <Button text="vote" handler={() => setVotes(voteSelected)}/>
        </div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[maxIndex(votes)]}
        <p>has {anecdotes[maxIndex(votes)]} votes</p>
        </>
    )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
