import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import DispatchAuthPage from "./pages/DispatchAuthPage";
import AboutPage from "./pages/AboutPage";

function Routes() {
  return (
    <Router history={history}>
      <NavBar />
      <h5 className="text-center text-warning">Project Under Construction</h5>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/dispatchauth" component={DispatchAuthPage} />
      </Switch>
    </Router>
  );
}
export default Routes;
