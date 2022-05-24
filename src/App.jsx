import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Posts from "./screens/Posts";
import Users from "./screens/Users";

function App() {

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
}

export default App;
