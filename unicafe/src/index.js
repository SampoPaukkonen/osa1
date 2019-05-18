import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
)

const Display = ({counter, text}) => (
    <tr>
        <td>{text}</td>
        <td>{counter}</td>
    </tr>
)

const Statistics = ({text, value, specialSymbol}) => (
    <tr>
        <td>{text}</td>
        <td>{value} {specialSymbol}</td>
    </tr>
)



const App = () => {
    //tallenna napit omaan tilaansa
    const [good, setGood]       = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad]         = useState(0)
    
    const Results = () => {
        if (good + neutral + bad === 0) {
            return (
                <div>Ei yhtään palautetta annettu</div>
            )
        }
        return (
            <table>
                <tbody>
                <Display counter={good} text={"hyvä"}/>
                <Display counter={neutral} text={"neutraali"}/>
                <Display counter={bad} text={"paha"}/>
                <Statistics text={"yhteensä"} value={good + neutral + bad}/>
                <Statistics text={"keskiarvo"} value={(good - bad) / (good + neutral + bad)}/>
                <Statistics text={"positiivisia"} value={(good / (good + neutral + bad)) * 100} specialSymbol={"%"}/>
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <div>
            <Header text={"anna palautetta"} />
            <Button handleClick={() => setGood(good + 1)} text="hyvä"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali"/>
            <Button handleClick={() => setBad(bad + 1)} text="paha"/>
            </div>
            <div>
            <Header text={"statistiikka"} />
            <Results/>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

