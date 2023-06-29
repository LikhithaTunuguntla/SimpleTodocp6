// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" onClick={onDeleteTodo} className="delete-btn">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
