import React from 'react'

export default function TodoForm({addTodo}) {
    const [title, setTitle] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
            const newTodo = {
                id: Date.now(),
                title,
                completed: false
            };
            addTodo(newTodo);
           // console.log(newTodo)
            setTitle('');
    }
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            onChange={e=> setTitle(e.target.value)}
            value={title}
          />
        </form>
    </div>
  )
}
