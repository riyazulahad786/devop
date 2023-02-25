import { createContext,react, useState } from "react";
import NoteContext from "./noteContext";
import {useEffect } from "react";
const NoteState = (props)=>{

   const  s1= {
      name:"syed",
      role:"developer"
    }

    const [state,setState] = useState(s1)
    const update = () =>{
       setTimeout(()=>{
          setState({
            name:"Riyaz",
            role:"developer"
          })
       },300000)
    }
   return (
    <NoteContext.Provider  value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
   )
}

export default NoteState;