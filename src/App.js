import './App.css';
import Signin from './containers/Signin/Signin';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" component={Signin} />
    </Switch>
  );
}

export default App;
