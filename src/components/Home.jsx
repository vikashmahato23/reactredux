import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/actions';
import { useNavigate } from 'react-router-dom'
import './Home.css';

export const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);

    const [Input, setInput] = useState();
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = () => {
        dispatch(addTodo(Input));
    }

    const navigate = useNavigate();
    const gotoTodo = (e) => {
        const path = "/todo/" + e.target.id;
        navigate(path);
    }

    return (
        <>
            <input type={"text"} onChange={handleChange}></input>
            <input type={"submit"} value={"Submit"} onClick={handleSubmit}></input>
            {todos.map((e) => {
                return (
                    <div
                        className={e.status ? "todo-done" : "todo-notdone"}
                        onClick={gotoTodo}
                        key={e.id}
                        id={e.id}>
                        {e.title}
                    </div>
                )
            })}
        </>
    )
}