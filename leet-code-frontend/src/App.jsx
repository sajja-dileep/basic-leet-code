import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const problems1 = [{
    title: "201.bitwise and number of range",
    difficulty: "medium",
    acceptance: "42%"
  }, {
    title: "202 happy number",
    difficulty: "easy",
    acceptance: "54%"
  }];

  const problems2 = [{
    title: "203 remove linked list from elements",
    difficulty: "hard",
    acceptance: "42%"
  }, {
    title: "204 remove linked list from elements",
    difficulty: "hard",
    acceptance: "42%"
  }];

  const [currentProblems, setCurrentProblems] = useState([]);

  const handleButton1Click = () => {
    setCurrentProblems(problems1);
  };

  const handleButton2Click = () => {
    setCurrentProblems(problems2);
  };

  return (
    <div>
      <input type="text" placeholder="email"></input>
      <input type="password" placeholder="password"></input>
      <button>sign in</button>
      <div>
        <button onClick={handleButton1Click}>1</button>
        <button onClick={handleButton2Click}>2</button>
      </div>
      <div>
        {currentProblems.map((problem, index) => (
          <ProblemStatement
            key={index}
            title={problem.title}
            acceptance={problem.acceptance}
            difficulty={problem.difficulty}
          />
        ))}
      </div>
    </div>
  );
}

function ProblemStatement(props) {
  const { title, acceptance, difficulty } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}

export default App;
