import './App.css';
import Details from './components/Details';
import Navbar from './components/Header/Header';
import SideBar from './components/SideBar';
function App() {
  return (
    <div>
     <Navbar />
     <div style={{display:'flex'}}>
        <SideBar style={{flex:1}} />
        <div style={{flex:2}}>
          <Details />
        </div>
     </div>
    </div>
  );
}

export default App;
