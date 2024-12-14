import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/users/auth", {
      headers: { authorization: localStorage.getItem("token") },
    }).then(() => { 
      setAuthState(true);
    }).catch((error) => {
      console.error("Error:", error);
     });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/createpost">Create A Post</Link>
            {!authState && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

/*
Few updates; 'Switch' is now 'Routes' in v6. , also no longer require 'exact' , and component in Route is now 'element={<Home/>}' for example
<BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>CreatePost</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>

With v6, it's a little bit of different.
previous:
        <Switch>
          <Route path="/" exact component={<Home />} />
          <Route path="/createpost" exact component={<Home />} />
        </Switch>
 v6:
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<Home />} />
        </Routes>      
*/
