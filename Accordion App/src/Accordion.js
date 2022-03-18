import React, { useState } from 'react'

function Accordion({question, answer}) {
  const [show, setShow] = useState(false)
  return (
    <>
    <div className='main_heading'>
      <p onClick = {() => setShow(!show)}>{show? '—':'+'}</p>
      <h3>{question}</h3>
    </div>
    {show?<p>{answer}</p>: null}
    </>
  );
}

export default Accordion;
