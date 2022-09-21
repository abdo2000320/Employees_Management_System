import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent'; 
import FooterComponent from './components/FooterComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
     <div>
        <Router>
            <HeaderComponent />
            <div className='container'>
                <Routes>
                    <Route  exact path='/' element={<ListEmployeesComponent/>}></Route>
                    <Route  path='/employees' element={<ListEmployeesComponent/>}></Route>
                    <Route path='/add-employee' element={<AddEmployeeComponent/>}></Route>
                    <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>}></Route>
                    <Route path='/delete-employee/:id' element={<ListEmployeesComponent/>}></Route>
                </Routes>
            </div>
            <FooterComponent />
        </Router>
     </div>
  );
}

export default App;
