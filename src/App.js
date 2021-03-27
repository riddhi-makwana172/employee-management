import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./container/employee/Dashboard";
import AddEmployee from "./container/employee/AddEmployee";
import EditEmployee from "./container/employee/EditEmployee";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={AddEmployee} />
        <Route path="/edit" component={EditEmployee} />
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
