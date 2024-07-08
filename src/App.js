import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import TempHistory from './Pages/TempHistory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/temphisto' element={<TempHistory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
