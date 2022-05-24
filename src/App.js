import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from './screens/users';
import Posts from './screens/posts';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={Posts}/>
            <Route exact path='/users' component={Users}/>
          </Switch>
          <Footer/>
        </div>
      </Router>  
    );
  };
};

export default App;
