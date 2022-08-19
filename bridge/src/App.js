import { useState } from 'react';
import './App.css';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Header} from './components'
import {Home,History} from './screens'
import { bg } from './components/Images';

function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div className="App">
      <img src={bg} className="bg-image"/>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/history' element={<History />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
