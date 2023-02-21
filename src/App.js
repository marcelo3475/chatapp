import '../src/signin.css'
//import Home from './components/Login'
import ChatBox from "./components/ChatBox"
import Welcome from "./components/Welcome"
import {auth} from "./firebase"
import {useAuthState} from "react-firebase-hooks/auth"





function App() {
  const [user] = useAuthState(auth)
  return(
    <div class='container'style={{marginBottom:"2rem"}}>
      <link rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
      </link>

      <article class='grid'>

          { !user ? ( <><Welcome/></>):(<> <ChatBox/> </>) }

      </article>      
    </div>
  )
}

export default App