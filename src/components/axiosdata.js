import React from 'react'
import Axios from 'axios'
import { useState,useEffect } from 'react'
export default function Data() {

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((data)=>{
      console.log(data);
    }).catch((error)=>{
     console.log(error);
    })
  })
  return (
    <div>

    </div>
  )
}







// import React from 'react'
// import Axios from 'axios'
// import { useState,useEffect } from 'react'
// export default function Data() {
//     const [tab,setTab] = useState([])
//     useEffect(()=>{
//       Axios.get('https://jsonplaceholder.typicode.com/users')
//       .then((data)=>{
//         setTab(data)
//        console.log(data);
//       }).catch((error)=>{
//        console.log(error);
//       })
//     },[])

   
//   return (
//     <div className='container'>
      
//     </div>
//   )
// }
