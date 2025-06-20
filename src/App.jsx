import { useState } from "react"

function App() {
  let [color,setColor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}> 
    <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 
      shadow-lg bg-white px-3 py-3 rounded-3xl">
        <button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"red"}}
        onClick={()=> setColor("red")}
      
        >Red</button>

         <button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"blue"}}
        onClick={()=> setColor("blue")}
        >blue</button>

         <button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"green"}}
        onClick={()=> setColor("green")}
        >Green</button>

<button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"olive"}}
        onClick={()=> setColor("olive")}
        >Olive</button>

<button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"orange"}}
        onClick={()=> setColor("orange")}
        >Orange</button>

<button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"gray"}}
        onClick={()=> setColor("grey")}
        >Gray</button>

<button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"pink"}}
        onClick={()=> setColor("pink")}
        >Pink</button>

<button className="outline-none px-4 rounded-full text-white"
        style={{backgroundColor:"black"}}
        onClick={()=> setColor("black")}
        >Black</button>

<button className="outline-none px-4 rounded-full text-black"
        style={{backgroundColor:"white"}}
        onClick={()=> setColor("white")}
        >White</button>
      </div>
    </div>
   </div>
  )
}

export default App
