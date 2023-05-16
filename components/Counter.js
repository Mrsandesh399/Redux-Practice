import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux'

const Counter = () => {
const dispatch = useDispatch()
 const counter = useSelector( state=>state.counter  )
 const show = useSelector( state=>state.showCounter  )

  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };

  const incrementHandler = ()=>{
    dispatch({type:"Increment"})
  }

  const increseHandler = () =>{
    dispatch({type:"Increse" , amount : 10})
  }

  const decrementHandler = ()=>{
    dispatch({type:"Decrement"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increse by 10</button>

        <button  onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
