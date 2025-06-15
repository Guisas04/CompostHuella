import { Router, Route } from 'preact-router';
import { Homepage } from './pages';
import { Dashboard } from './pages/dashboard';
import { Formacoes } from './pages/formacoes';
import { Info } from './pages/info';
import { Map } from './pages/map';

export function App() {
  return (
    <div id="app">
      <Router>
        <Route path="/" component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/formacoes" component={Formacoes} />
        <Route path="/info" component={Info} />
        <Route path="/map" component={Map} />
      </Router>
    </div>
  );
}