import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

// Components
import Navbar from './components/Navbar'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.message);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Navbar/>
      <Login/>
    </>
  )
}

export default App
