import React from 'react'
import Mockdata from '../../src/MOCK_DATA.json'
import { useState,useEffect } from 'react'
import { Axios } from 'axios'
export default function Search() {
  const [filter,setFilter]= useState('')
  const [db,setDbs] = useState("")

  return (
    <div className='container'>
    <input type='text' placeholder='search...' onChange={((e)=>{
     setFilter(e.target.value)
    })}/>
      <table className='table table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>gender</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {Mockdata.filter(val=>{
            if(filter === ''){
              return val;
            }else if(val.first_name.toLowerCase().includes(filter.toLowerCase()) ||
            val.last_name.toLowerCase().includes(filter.toLowerCase()) ||
            val.gender.toLowerCase().includes(filter.toLowerCase()) || 
            val.email.toLowerCase().includes(filter.toLowerCase())){
              return val;
            }
          }).map(m=>(
            <tr key={m.id}>
               <td>{m.first_name}</td>
               <td>{m.last_name}</td>
               <td>{m.gender}</td>
               <td>{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



// import MOCKDATA from "../../src/MOCK_DATA.json";
// import { useState } from "react";

// const Search = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <div className="container">
//       <input
//         type="text"
//         placeholder="search"
//         className="form-control"
//         onChange={((e)=>{
//            setSearch(e.target.value)
//         })}
//         style={{ marginTop: 50, marginBottom: 30, width: "40%" }}
//       />
//       <table className="table table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th>firstName</th>
//             <th>lastName</th>
//             <th>gender</th>
//             <th>email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {MOCKDATA.filter(val=>{
//                if(search === ''){
//                 return val;
//                }else if (val.first_name.toLowerCase().includes(search.toLowerCase()) || 
//                          val.last_name.toLowerCase().includes(search.toLowerCase()) ||
//                          val.gender.toLowerCase().includes(search.toLowerCase()) ||
//                          val.email.toLowerCase().includes(search.toLowerCase())
//                          ){
//                 return val;
//                }
//           }).map((m) => (
//             <tr key={m.id}>
//               <td>{m.first_name}</td>
//               <td>{m.last_name}</td>
//               <td>{m.gender}</td>
//               <td>{m.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Search;
