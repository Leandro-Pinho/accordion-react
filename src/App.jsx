import { useState } from 'react';
import './App.css';

const data = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus odit eum voluptatem quis eveniet facere, pariatur magnam dignissimos, commodi expedita ipsum nemo blanditiis necessitatibus non? Ab suscipit pariatur nesciunt."
  },
  {
    question: "Question 2",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus odit eum voluptatem quis eveniet facere, pariatur magnam dignissimos, commodi expedita ipsum nemo blanditiis necessitatibus non? Ab suscipit pariatur nesciunt."
  },
  {
    question: "Question 3",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus odit eum voluptatem quis eveniet facere, pariatur magnam dignissimos, commodi expedita ipsum nemo blanditiis necessitatibus non? Ab suscipit pariatur nesciunt."
  },
  {
    question: "Question 4",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, doloribus odit eum voluptatem quis eveniet facere, pariatur magnam dignissimos, commodi expedita ipsum nemo blanditiis necessitatibus non? Ab suscipit pariatur nesciunt."
  },
]

function App() {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
