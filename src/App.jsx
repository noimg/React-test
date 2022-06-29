/* eslint react-hooks/exhaustive-deps : off */
import React from "react";
import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo"; 
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
    const [imcompeteTodos, setImcompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const [todoText, settodoText] = useState('');
    const onChangeText = (event) => settodoText(event.target.value);
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...imcompeteTodos, todoText];
        setImcompleteTodos(newTodos);
        settodoText("");
    };
    const onClickDelete = (index) => {
        const newTodos = [...imcompeteTodos];
        newTodos.splice(index, 1);
        setImcompleteTodos(newTodos);
    };

    const onClickcomplete = (index) => {
        const newIncompleteTodos = [...imcompeteTodos];
        newIncompleteTodos.splice(index, 1);
        setImcompleteTodos(newIncompleteTodos);

        const newcompletetodos = [...completeTodos, imcompeteTodos[index]];
        setCompleteTodos(newcompletetodos);
    };

    const onclickBack = (index) => {
        const newcompletetodos = [...completeTodos];
        newcompletetodos.splice(index, 1);
        setCompleteTodos(newcompletetodos);

        const newIncompleteTodos = [...imcompeteTodos, completeTodos[index]];
        setImcompleteTodos(newIncompleteTodos);
    };

    const onClickcompleteDelete = (index) => {
        const newcompletetodos = [...completeTodos];
        newcompletetodos.splice(index, 1);
        setCompleteTodos(newcompletetodos);

    };

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeText} onClick={onClickAdd}
            disabled={imcompeteTodos.length >= 5}
            />

            {imcompeteTodos.length >= 5 && (
                <p>投稿できるTodoは5個までです。</p>
            )}
            
            <IncompleteTodo Todos={imcompeteTodos} onClickcomplete={onClickcomplete} onClickDelete={ onClickDelete} />
            <CompleteTodos onclickBack={onclickBack} onClickcompleteDelete={onClickcompleteDelete} Todos={ completeTodos} />
        </>
        )
};
 