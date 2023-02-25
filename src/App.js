import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/search';
import AxiosData from './components/axiosdata'
import NoteState from './context/notes/NoteState';
import Product from './components/product';
// import { useSelector,useDispatch } from 'react-redux';
function App() {
  
  return (
    <div >
    <NoteState>
    <Navbar title="hospital"  search={true}/>
      <Search/>
      <Product/>
        {/* <AxiosData></AxiosData> */}
    
    </NoteState>
   
      
    </div>
  );
}

export default App;
