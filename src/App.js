import {  auth  } from "./firebase.js"
import {  useAuthState  } from "react-firebase-hooks/auth/dist/index.esm.js";
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/signin.css'
import Home from './components/Login.js'
import ChatBox from "./components/ChatBox.js"
import About from './components/about.js'


function App() {
  const [user] = useAuthState(auth)
  return(
    <Router>
      <div class='container'style={{marginBottom:"2rem"}}>
        <link rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
        </link>
        <article class='container-fluid'>
          <Routes>
              <Route path='/' element={!user ? (<> <Home/>  </>): (<><ChatBox/>    </>)}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </article>      
      </div>
    </Router>
  )
}

export default App