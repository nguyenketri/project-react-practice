
import './App.scss';
import Header from './components/Header'
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
function App() {
  
  
  return (
    <BrowserRouter>
    <div className='app-container'>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={ <TableUsers/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        
      </Container>
     
    
    </div>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
// theme="light"
// transition={Bounce}
/>

    </BrowserRouter>
  );
}

export default App;
