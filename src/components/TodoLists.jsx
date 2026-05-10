import React from 'react'
import Todo from './Todo'
export default function TodoLists({ todos, handleDel }) {
    return (
        <div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} handleDel={handleDel}/>
                ))}
            </ul>
        </div>
    )
}
