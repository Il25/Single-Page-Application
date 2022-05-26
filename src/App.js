import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
          <Routes>
            <Route exact path='/' element={<Posts/>}/>
            <Route exact path='/users' element={<Users/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>  
    );
  };
};

export default App;
