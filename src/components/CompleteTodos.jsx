
import React from "react";

export const CompleteTodos = (props) => {
    const { onclickBack, onClickcompleteDelete, Todos } = props;

    return (
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
            {Todos.map((todo, index) => {
                return (
                    <div key={todo} className="list-row">
                        <li>{todo}</li>
                        <button onClick={() => onclickBack(index)}>戻す</button>
                        <button onClick={() => onClickcompleteDelete(index) }>削除</button>
                    </div>
                );
            })}
        </ul>

    </div >
)
};