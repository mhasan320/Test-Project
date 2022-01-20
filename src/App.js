
import { Layout } from "./components/Layout";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CreateBlog } from "./components/BlogComponent/CreateBlog";
import { UpdateBlog } from "./components/BlogComponent/UpdateBlog";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="">
        <Router>
          <Layout>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="blog" element={<Blog/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="create" element={<CreateBlog/>} />
                <Route path="update" element={<UpdateBlog/>} />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
