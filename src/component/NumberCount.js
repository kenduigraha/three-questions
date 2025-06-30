import { useStore } from '../store';

function NumberCount() {
  const { state, dispatch } = useStore()
  // || {state: {number: 0}, dispatch: () => {}};
  console.log("useStore: ", useStore())
  return (
    <div>
      <p>Number: {state?.number} </p>
      <button onClick={() => dispatch({
        type: 'INCREMENT'
      })}> + </button>
      <button onClick={() => dispatch({
        type: 'DECREMENT'
      })}> - </button>
    </div>
  );
}

export default NumberCount;