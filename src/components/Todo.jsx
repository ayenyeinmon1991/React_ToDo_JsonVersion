import React from 'react'
import { useState } from 'react';
export default function Todo({todo, handleDel, handleUpdate}) {
    let [isEditing, setIsEditing] = React.useState(false);
    let [editedTitle, setEditedTitle] = useState(todo.title);
    let handleEditSubmit=(e)=>{
        e.preventDefault();
        const updatedTodo = {
            ...todo,
            title: editedTitle
        }
        handleUpdate(updatedTodo);
        setIsEditing(false);
        
    }
  return (
    <div>
        <li className="todo-item-container" >
                        <div className="todo-item">
                            <input type="checkbox" />
                            {!isEditing && <span onDoubleClick={()=> setIsEditing(true)} className="todo-item-label">{todo.title}</span>}
                            {isEditing && (
                                <form onSubmit={handleEditSubmit}>
                                    <input 
                                        className="todo-item-input" 
                                        value={editedTitle} 
                                        onChange={e=> setEditedTitle(e.target.value)}
                                        autoFocus
                                    />
                                </form>
                            )}
                        </div>
                        <button className="x-button" onClick={() => handleDel(todo.id)}>
                            <svg
                                className="x-button-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
    </div>
  )
}
