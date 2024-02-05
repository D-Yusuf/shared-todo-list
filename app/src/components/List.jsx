import ListItem from "./ListItem";
import data from "../js/data";
import ListForm from "./ListForm";
import { useEffect, useState } from "react";
import ListItems from "./ListItems";
export default function List(){
    const [items, setItems] = useState(data)
    function setItemsData(){
        console.log("AAA")
        setItems(data)
        console.log(items)
    }
    
    useEffect(()=>{
        console.log(items)
    }, [items])
    return(
    <div>
        <ListForm setItemsData={setItemsData}/>
        <ListItems items={}/>
        
    </div>
    )
}