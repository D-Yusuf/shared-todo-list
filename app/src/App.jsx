import List from './List'
import ItemForm from './components/ItemForm'

function App() {

  return (
    <div className="container flex flex-col items-center absolute top-1/2 -translate-y-1/2 ">
      <ItemForm/>
      <List />
    </div>
  )
}

export default App
