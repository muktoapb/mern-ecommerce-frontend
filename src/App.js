
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
