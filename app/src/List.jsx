import Item from "./components/ListItem";
import { useState } from "react";
import { useEffect } from "react";

export default function List() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("listItems"));
    if (storedItems) {
      setItems(storedItems);
    }else{
      setItems([])
    }
  }, []);
  async function addItemToData(e){
      e.preventDefault()
      const newTask = e.target[0]; // gets the input because the form has only one
      const newTaskObject = {
          id: items.length + 1, //length will increase after item is pushed in data
          task: newTask.value,
          done: false,
      }
      setItems(prevState => [...prevState, newTaskObject])
      localStorage.setItem("listItems", JSON.stringify(items))
      console.log(items)
  }

  let dataItems = items.map(item =>  <Item key={item.id} task={item.task} done={item.done} />)
  return (
    <>
      <div className=" w-full text-center mb-10">
        <form onSubmit={addItemToData} id="item-form" className="w-full flex justify-center ">
          <input className="rounded-s-lg p-2 text-regular focus:border-none" type="text" required/>
          <button className="bg-[#253237] px-2 text-white rounded-e-lg " type="submit">Add</button>
        </form>
      </div>

      <div className="flex flex-col items-center overflow-y-auto h-60">
          {dataItems}
      </div>
    </>
  );
  }

// TO BE CONTINUED