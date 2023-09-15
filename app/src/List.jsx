import Item from "./components/ListItem";
import data from "./data";
export default function List(){
    const dataItems = data.map(item =>{
        return(
            <Item key={item.id} task={item.task} done={item.done}/>
        )
    })
    return(
        <div className="flex flex-col items-center overflow-y-auto h-60">
            {dataItems}

        </div>
        )
   
}