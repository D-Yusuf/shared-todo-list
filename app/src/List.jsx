import Item from "./components/ListItem";
import data from "./js/data";
import { useState } from "react";
import { useEffect } from "react";

export default function List() {
  let dataItems = data.map(item =>  <Item key={item.id} task={item.task} done={item.done} />)
    useEffect(()=>{
      dataItems = data.map(item =>  <Item key={item.id} task={item.task} done={item.done} />);
    })
  return (
    <div className="flex flex-col items-center overflow-y-auto h-60">
        {dataItems}
    </div>
  );
  }

