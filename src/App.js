import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Contexts/AuthProvider/AuthProvider';
import LogIn from './components/LogIn/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Register from './components/LogIn/Register/Register';
import About from './components/Pages/Home/About/About';
import BlogDetails from './components/Pages/Home/Blogs/BlogDetails';
import Contact from './components/Pages/Home/Contact/Contact';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
        <Header/>
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
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
