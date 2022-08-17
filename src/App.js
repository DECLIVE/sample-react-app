import Coke from "./components/coke.js";
import Sidebar from "./components/sidebar.js"
import List from "./components/list.js"
import Navbar from "./components/Navbar.jsx";
import './App.css'
function App() {
  return (
    <div className="App">
      <Coke/>
       <Navbar/>
      <List />
   
    <Sidebar/>
    </div>
  );
}

export default App;