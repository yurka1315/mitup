import { observer } from "mobx-react-lite";
import counterStore from "../../store/counterStore";


const Counter = observer(props => {
    const { count, increase, decrease } = counterStore;

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>increment</button>
            <button onClick={decrease}>decrement</button>
        </div>
    );
});

export default Counter;