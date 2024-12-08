import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/createpost">Create A Post</Link>
          <Link to="/">Home</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
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
