export default function Item(props){
    return(
        <div className="flex gap-x-5 w-full mb-5 border-b-4 border-[#253237] py-2">
            <h1 className="text-2xl">{props.task}</h1>
            <input className="" type="checkbox"/>
        </div>
    );
}