import React, { useState } from 'react'
import {questions} from './Data'
import Accordion from './Accordion'


function App() {
  const [data, setData] = useState(questions)
  return (
    <>
    <div className="main_div">
      <h1>React Interview Questions</h1>
      {
        data.map((curEle) => {
          const { id } = curEle
          return < Accordion key = {id} {...curEle}/>
        })
      }
    </div>
    </>
  );
}

export default App;
