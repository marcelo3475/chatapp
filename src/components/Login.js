import "../../src/signin.css";
import About from "./about";


const Home = () => {
  return (
    <div class="container">
      <link
        rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"
      ></link>
      <nav class="container-fluid" style={{marginBottom:"2rem"}}>
        <ul>
          <li>
            <a href="./About" onClick={About}>
              <strong>Another Web Chat</strong>
            </a>
          </li>
        </ul>
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" class="secondary">
              Theme
            </summary>
            <ul role="listbox">
              <li>
                <button href="/src/functions/ThemeSwitch.js" data-theme-switcher="auto">
                  Auto
                </button>
              </li>
              <li>
                <button href="/src/functions/ThemeSwitch.js" data-theme-switcher="light">
                  Light
                </button>
              </li>
              <li>
                <button href="/src/functions/ThemeSwitch.js" data-theme-switcher="dark">
                  Dark
                </button>
              </li>
            </ul>
          </details>
        </li>
      </nav>
      <main class="container">
        <article class="grid">
          <div>
            <hgroup>
              <h1>Sign in</h1>
              <h2>Login page</h2>
            </hgroup>
            <form>
              <input
                type="text"
                name="login"
                placeholder="User name"
                aria-label="Login"
                autocomplete="nickname"
                required
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                autocomplete="current-password"
                required
              ></input>
              <fieldset>
                <input
                  style={{ marginBottom: "10px" }}
                  type="checkbox"
                  role="switch"
                  id="remember"
                  name="remember"
                ></input>
                <label style={{ marginBottom: "-10px" }} for="remember">
                  Remember me
                </label>
                <br />

                <button
                  type="submit"
                  id="toChatRoom"
                  style={{ marginBottom: "-15px" }}
                >
                  Login
                </button>
              </fieldset>
            </form>


            <label
              style={{ marginBottom: "10px", textAlign: "left" }}
              for="forgot-password"
            >
              Forgot password?
            </label>
            <label
              style={{ marginBottom: "10px", textAlign: "left" }}
              for="signUp"
            >
              Sign Up
            </label>
          </div>
          <div></div>
        </article>
      </main>
    </div>
  );
};
export default Home;
