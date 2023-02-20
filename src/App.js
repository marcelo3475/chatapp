import '../src/signin.css'
import Home from './components/Login'
import About from './components/about'

function App() {

  return(
    <div class='container'style={{marginBottom:"2rem"}}>
      <article class='grid'>
        <Home/>
      </article>
      <About/>
    </div>
  )
}

export default App