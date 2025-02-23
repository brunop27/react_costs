import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Contato</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newProject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
