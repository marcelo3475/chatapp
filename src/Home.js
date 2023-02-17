import '../src/signin.css'
import GoogleSignin from "./img/btn_google_signin_dark_pressed_web.png"
import {  auth  } from "./firebase"
import {  useAuthState  } from "react-firebase-hooks/auth"
import {  GoogleAuthProvider, signInWithRedirect  } from "firebase/auth"


const Home = () => {
  const [user] = useAuthState(auth)
  const googleSignIn = () =>{
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  const signOut = () => {
    auth.signOut()
  }
    return(
      <div class='container'>
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"></link>
        <nav class='container-fluid'>
          <ul>
            <li><a href='./' onclick="event.preventDefault()"><strong>Chat App</strong></a></li>
          </ul>
          <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" class="secondary">Theme</summary>
            <ul role="listbox">
              <li><button href="#" data-theme-switcher="auto">Auto</button></li>
              <li><button href="#" data-theme-switcher="light">Light</button></li>
              <li><button href="#" data-theme-switcher="dark">Dark</button></li>
            </ul>
          </details>
        </li>
        </nav>
        <main class='container'>
          <article class='grid'>
            <div>
              <hgroup>
                <h1>Sign in</h1>
                <h2>Login page</h2>
              </hgroup>
              <form>
                <input type="text" name="login" placeholder="User name" aria-label="Login" autocomplete="nickname" required></input>
                <input type='password'  name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required></input>
                <fieldset>
                  
                  <input style={{ marginBottom:'10px'}} type='checkbox' role='switch' id='remember' name='remember'></input>
                  <label style={{ marginBottom:'-10px'}} for='remember'>Remember me</label><br />
                  
                  <button type='submit' id='toChatRoom'style={{ marginBottom:'-15px'}}>Login</button>
                </fieldset>
              </form>
                  {user ? (<button onclick={signOut} className="sign-out" type="button">Sign Out</button>):(<button className='sign-in'><img
                  onclick={googleSignIn}
                  src={GoogleSignin}
                  alt='sign in with google'
                  type="button"
                  />
                  </button>)}
                  <label style={{ marginBottom:'10px',textAlign:'left'}} for='forgot-password'>Forgot password?</label>
                  <label style={{ marginBottom:'10px',textAlign:'left' }} for='signUp'>Sign Up</label>
            </div>
            <div></div>
          </article>
        
        </main>
        <footer>
          <ul>
            <small>Developed by <a href='https://www.twitter.com/marcelo69420'>@marcelo6942</a> • and <a href='https://picocss.com/'>Picocss</a></small>
          </ul>
        </footer>
      </div>
    )
  }
;

export default Home