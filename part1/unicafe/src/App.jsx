import { useState } from 'react'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistics = ({ good, neutral, bad }) => {
    let all = good + neutral + bad;
    let percentageOfPositiveVotes = good === 0 ? 0 : (good / all) * 100;
    let average = all === 0 ? 0 : (good - bad) / all;

    return all === 0 ? (
        <div>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </div>
    ) : (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={all} />
                    <StatisticLine text='average' value={average} />
                    <StatisticLine text='positive' value={percentageOfPositiveVotes + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleFeedback = (feedback) => {
        switch (feedback) {
            case 'good':
                setGood(good + 1)
                break
            case 'neutral':
                setNeutral(neutral + 1)
                break
            case 'bad':
                setBad(bad + 1)
                break
            default:
                break
        }
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => handleFeedback('good')} text='good' />
            <Button onClick={() => handleFeedback('neutral')} text='neutral' />
            <Button onClick={() => handleFeedback('bad')} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App