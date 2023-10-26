import {useEffect, useState} from "react";

import {todosService} from "../../../services";
import {Todo} from "../Todo";
import styles from '../../../styles/Wrapper.module.css'

export const TodosComponent = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getTodos().then(({data}) => setTodos(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};