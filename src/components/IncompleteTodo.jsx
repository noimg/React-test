import React from "react";

export const IncompleteTodo = (props) => {
    const {Todos, onClickcomplete, onClickDelete} = props;

    return (
        <div className="imcompete-area">
        <p className="title">未完了のTODO</p>
        <ul>
            {Todos.map((todo, index) => {
                return (
                    <div key={todo} className="list-row">
                    <li>{todo}</li>
                    <button onClick={() => onClickcomplete(index) }>完了</button>
                        <button onClick={() => onClickDelete(index) }>削除</button>
                    </div>
                );
            })}

    </ul>
    </div >
    )

};

