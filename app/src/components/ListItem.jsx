export default function Item(props){
    const {task, done} = props;
    return(
        <div className="flex gap-x-5 w-full mb-5">
            <h1 className="text-2xl">{task}</h1>
            <input className="" type="checkbox"/>
        </div>
    );
}