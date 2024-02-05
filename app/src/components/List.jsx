import ListItem from "./ListItem";
import data from "../js/data";
import ListForm from "./ListForm";
import { useEffect, useState } from "react";
export default function List(){
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || data)
    function setItemsData(){
        setItems(data)
    }
    function toggleDone(id){
        const handledItem = items.filter((item, i)=>{
            items[i].id == id ? items.splice(i, 1) : ""
            return item.id == id
        })[0]
        handledItem.isDone = !handledItem.isDone
        setItems(prevState=> [...prevState, handledItem])

    }
    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(items))

    }, [items])
    const dataItems = items.map(item =>  <ListItem key={item.id} task={item.task} isDone={item.isDone} handleChange={()=> toggleDone(item.id)} />)

    return(
    <div>
        <ListForm setItemsData={setItemsData}/>
        <div className="flex flex-col items-center overflow-y-auto h-96 space-y-5">
            {dataItems}
        </div>
    </div>
    )
}