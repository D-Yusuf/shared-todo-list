
export default function ListItem({task, isDone, handleChange}){
    return(
        <div className="flex w-full text-2xl justify-between ">
            <h1>{task}</h1>
            <input onChange={handleChange} type="checkbox" checked={isDone}/>
        </div>
    )
}