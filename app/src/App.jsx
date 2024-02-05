import { useEffect } from 'react'
import ListForm from './components/ListForm'
import data from './js/data'
import List from './components/List'

export default function App() {
  // useEffect(()=>{
  //   console.log("data changed!")
  // }, [data])
  return (
    <div className="container flex flex-col items-center">
            <h1 className="font-extrabold text-4xl my-5">TO-DO</h1>

      

      <List />
    </div>
  )
}



