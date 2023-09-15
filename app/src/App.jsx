import List from './List'
import ItemForm from './components/ItemForm'

function App() {

  return (
    <div className="container flex flex-col items-center min-h-screen">
            <h1 className="font-extrabold text-4xl my-5">TO-DO</h1>

      <ItemForm/>
      <List />
    </div>
  )
}

export default App

