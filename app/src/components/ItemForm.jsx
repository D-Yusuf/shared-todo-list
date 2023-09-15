import data from "../js/data";
import List from "../List";
import { useState } from "react";
export default function AddItem(){
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItemToData(e)

  };
    return(
        <div className=" w-full text-center mb-10">
            <form onSubmit={handleSubmit} id="item-form" className="w-full flex justify-center ">
                <input className="rounded-s-lg p-2 text-regular focus:border-none" type="text" required/>
                <button className="bg-[#253237] px-2 text-white rounded-e-lg " type="submit">Add</button>
            </form>
        </div>
    )
}
async function addItemToData(e){
    e.preventDefault()
    const newTask = e.target[0].value; // gets the input because the form has only one
    const newTaskObject = {
        id: data.length + 1, //length will increase after item is pushed in data
        task: newTask,
        done: false,
    }
    data.push(newTaskObject)
    console.log(data)
    
}
