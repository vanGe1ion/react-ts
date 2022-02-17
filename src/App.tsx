import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPages';


const App: React.FC = () => {
  

  return (
  <BrowserRouter>
    <Navbar/>
    <div className='container'>
      <Switch>
        <Route component={TodosPage} path="/" exact />
        <Route component={AboutPage} path="/about" />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default App;
 