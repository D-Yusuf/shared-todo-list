export default function Item(props){
    const {task, done} = props;
    return(
        <div className="">
            <h1>{task}</h1>
            <input type="checkbox" />
        </div>
    );
}