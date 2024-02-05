import data from "../js/data"
import ListItem from "./ListItem"

export default function ListItems({items}){
    
    function handleChange(id){
        const handledItem = items.filter(item=>{
            return item.id == id
        })[0]
        handledItem.isDone = !handledItem.isDone
        console.log(handledItem)
    }
    const dataItems = items.map(item =>  <ListItem key={item.id} task={item.task} isDone={item.isDone} handleChange={()=> handleChange(item.id)} />)

    return(
        <div className="flex flex-col items-center overflow-y-auto h-96 space-y-5">
            {dataItems}
        </div>
    )
}