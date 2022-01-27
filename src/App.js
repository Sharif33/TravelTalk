import * as React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Contexts/AuthProvider/AuthProvider';
import AddBlog from './components/Dashboard/Admin/AddBlog';
// import AdminRoute from './components/Dashboard/Admin/AdminRoute';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import ManageAllBlogs from "./components/Dashboard/Admin/ManageAllBlogs";
import ManageBlogs from './components/Dashboard/Admin/ManageBlogs';
import ManageCompare from './components/Dashboard/Admin/ManageCompare';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './components/Dashboard/Dashboard/DashboardHome';
import AdminRoute from "./components/LogIn/AdminRoute/AdminRoute";
import LogIn from './components/LogIn/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Register from './components/LogIn/Register/Register';
import MyCompare from './components/Pages/Compare/MyCompare';
import About from './components/Pages/Home/About/About';
import BlogDetails from './components/Pages/Home/Blogs/BlogDetails';
import Contact from './components/Pages/Home/Contact/Contact';
import Home from './components/Pages/Home/Home/Home';
import ShareExperience from "./components/Pages/Home/ShareExperience/ShareExperience";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="blog/:id" element={<PrivateRoute>
            <BlogDetails />
          </PrivateRoute>} />
          <Route path="myCompare" element={<PrivateRoute>
            <MyCompare />
          </PrivateRoute>} />
          <Route path="shareExp" element={<PrivateRoute>
            <ShareExperience />
          </PrivateRoute>} />
          <Route path="dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
            <Route index element={<PrivateRoute>
                <DashboardHome></DashboardHome>
              </PrivateRoute>} />
            <Route path={`/dashboard/myCompare`} element={<PrivateRoute>
               <MyCompare/>
              </PrivateRoute>}>
              </Route>
              <Route path={`/dashboard/manageCompare`} element={<AdminRoute>
                <ManageCompare/>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addBlog`} element={<AdminRoute>
                <AddBlog/>
              </AdminRoute>}>
                </Route>
              <Route path={`/dashboard/manageBlogs`} element={<AdminRoute>
                <ManageAllBlogs/>
              </AdminRoute>}>
              </Route>
             {/*  <Route path={`/dashboard/manageBlogs`} element={<AdminRoute>
                <ManageBlogs/>
              </AdminRoute>}>
              </Route> */}
            </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
