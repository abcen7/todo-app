import './App.css'
import TodoForm from './components/TodoForm'
import Table from './components/Table'



const App = () => {

  return (
    <div className='bg-gray-800 px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center'>ToDo List</h1>
      </nav>
      <TodoForm />
      <Table />
    </div>
  )
}

export default App
