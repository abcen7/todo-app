import { FC } from 'react'

const TodoForm: FC = () => {

  return (
    <div className=''>
      <input type="text" placeholder="Add todo" className="input input-bordered w-full max-w-xs" />
      <button className="btn btn-neutral ml-2">Add ToDo</button>
    </div>
  )
}

export default TodoForm