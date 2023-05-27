import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './Pages/Posts';
import Update from './Pages/Update';
import Add from './Pages/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/update">
            <Update />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
