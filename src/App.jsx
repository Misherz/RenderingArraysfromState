import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Learner from './utilities/data.mjs'
import { Learner as learnersData } from './utilities/data.mjs';
import LearnerInfo from './utilities/Learner'
import LearnerScore from './utilities/Score'

function App() {
  const [learners, setLearners] = useState(learnersData)

  return (
    <>
      <h1>Learner List</h1>
      {learners.map((learner, i) => (
        <Learner key={i} learner={learner} />))}
      <LearnerInfo></LearnerInfo>
      <LearnerScore></LearnerScore>
    </>

  )
}

export default App
