import { useId, useState } from "react";
import data from "../js/data";
export default function ListForm({setItemsData}) {
  const [newItem, setNewItem] = useState({id: null, task: "", isDone: false,});
  function handleChange(e) {
    const {name, value} = e.target
    setNewItem(
      
      prevState => {
        return {...prevState, [name]: value, id: data.length + 1}
      }
    );
  }
  function addItem(e){
    e.preventDefault()
    data.push(newItem)
    setNewItem({id: 0, task: "", isDone: false,})
    setItemsData()
    // console.log(data)
  }
  return (
    <form onSubmit={addItem} id="item-form" className="w-full flex justify-center ">
      <input
        name="task"
        onChange={handleChange}
        value={newItem.task}
        className="rounded-s-lg p-2 text-regular focus:border-none"
        type="text"
        autoComplete="off"
        required
      />
      <button
        className="bg-[#253237] px-2 text-white rounded-e-lg "
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

