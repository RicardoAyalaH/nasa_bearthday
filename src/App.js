import './App.css';
import MainPage from './MainPage/MainPage';
import EarthPage from './EarthPage/EarthPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/image/:date">
              <EarthPage />
            </Route>

            <Route path="/">
              <MainPage />
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
