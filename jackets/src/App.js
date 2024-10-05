import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Women from './components/Women';
import Kids from './components/Kids';
import Men from './components/Men';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' index="/" element={<Home/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
