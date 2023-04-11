import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
  const counter = useSelector(state=> state.counter);    //Works like state automatically re render component on change

  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch();
  // console.log(counter);

  const incrementHandler= () => {
    dispatch({type : "increment"});
  }

  const increaseHandler= () => {
    dispatch({type : "increase", amount: 5});
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"});
  }

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase with 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;