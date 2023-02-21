import { observer } from "mobx-react-lite";
import todosStore from "../../store/todosStore";
import Todo from "../Todo";

const TodosList = observer(() => {
    return (
        <div>
            <button onClick={() => todosStore.getTodos()}>Fetch todos</button>
            <ul>
                {todosStore.todos.map((t) => {
                    <Todo title={t.title} key={t.id} />;
                })}
            </ul>
        </div>

    );
});

export default TodosList;