import { useState } from 'react';
import './App.css';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Footer, Header} from './components'
import {Home} from './screens'

function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
