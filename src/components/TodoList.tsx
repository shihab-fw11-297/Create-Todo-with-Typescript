import { Todo } from "../models/models";
import SingleTodo from './SingleTodo';

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({
    todos,
    setTodos }) => {
    return (
        <div className="container">
                {todos?.map((todo, index) => (
                <SingleTodo
                    todos={todos}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                />
        ))}
        </div>
    )
}

export default TodoList;