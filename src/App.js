import { Switch, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path='/add'><Form /> </Route>
        <Route path='/'>
          <TinderCards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
