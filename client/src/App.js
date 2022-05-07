import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Error from './components/error';
import Profile from './components/profile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
