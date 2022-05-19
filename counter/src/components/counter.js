import React,{useState , Fragment} from 'react';
import './counter.css';

const Counter = ({initialValue}) =>{

   const[count,setCount] = useState(initialValue);   // Initial value

    return(
      <Fragment>
      <h1>Counter app:{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
      </Fragment>

    )
}

export default Counter;