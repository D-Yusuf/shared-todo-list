export default function AddItem(){
    return(
        <div className="absolute -top-1/2 w-full">
            <form className="w-full flex justify-center bg-black">
                <input className="rounded-s-lg" type="text" required/>
                <button className="bg-[#253237] px-2 text-white rounded-e-lg " type="submit">Add</button>
            </form>
        </div>
    )
}