import classes from './Counter.module.css';
import { useSelector } from 'react-redux';


const Counter = () => {
  const counter = useSelector(state=> state.counter);    //Works like state automatically re render component on change

  // console.log(counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      
      <div>
        <button>Increment</button>
        <button>Decrement</button>


      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
