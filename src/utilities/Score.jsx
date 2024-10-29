function LearnerScore(props) {
    return (
        <ul>
            {learner.scores.map((score, i) => (<li key={i}>Score: {score.score}</li>))}
        </ul>
)}

export default LearnerScore