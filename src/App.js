
import './App.css';
import LoginHome from './Components/LoginPage/LoginHome';
import Layout from './Components/mainpage/layout';
import NavBar from './Components/navbar/navbar';



function App() {
  return (
    <div className="App">
      {
        localStorage.getItem("user")==undefined ?  <LoginHome /> : <span><NavBar /> <Layout /></span>
      }
      
     
    </div>
    
  );
}

export default App;
