import {useState} from "react";
import uuid from 'react-uuid';
const initionalCounts = [
  {
    id:123,
    value:10,
  },
  {
    id:12,
    value:20,
  },
  {
    id:'ewwcwd123',
    value:-10,
  },
]
function App() {
  const [counts, setCounts]=useState(initionalCounts)
  const plus = (id) => {
    const updateCounts = counts.map(el=>
    el.id===id
        ? {...el,value: el.value + 1}
        : el
    )
    setCounts(updateCounts);
  };
  const minus = (id) => {
    const updateCounts = counts.map(el=>
    el.id===id
        ? {...el,value:el.value - 1}
        : el
    )
    setCounts(updateCounts);
  };
  const reset = (id) => {
    const updateCounts = counts.map(el=>
    el.id===id
        ? {...el,value:el.value=0}
        : el
    )
    setCounts(updateCounts);
  }
  const addCounter = ()=>{
    const newCount={
      id:uuid(),
      value:0
    }
    setCounts([...counts,newCount])
  }

  return (
    <div >
      <ul>
        {counts.map(el=> (
        <li key = {el.id}>
        <button onClick={()=>plus(el.id)}> Plus </button>
          {el.value}
        <button onClick={()=>minus(el.id)}> Minus </button>
        <button onClick={()=>reset(el.id)}> Delete </button>
      </li>
        ))
        }
      </ul>

      <button onClick={addCounter}> Add counter</button>
    </div>
  );
}

export default App;
