import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Login'
import SignUp from './components/SignUp';
import UsersList from './components/UsersList';
import ProtectedRoute from './ProtectedRoute';
import UpdateUser from './components/UpdateUser';
import Departments from './components/Departments';
import Profile from './components/Profile';



function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/profile" element={<Profile/>} />

          <Route exact path="/" element={<Departments/>} />



          <Route path="/admin/users" element={
            <ProtectedRoute>
            <UsersList/>
            </ProtectedRoute>
          }/>

          <Route path="/admin/users/:id" element={
            <ProtectedRoute>
            <UpdateUser/>
            </ProtectedRoute>
          }/>

          <Route path="/admin/dept" element={
            <ProtectedRoute>
            <Departments/>
            </ProtectedRoute>
          }/>


        </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
