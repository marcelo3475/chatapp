import React, { Component } from 'react'
import '../signin.css'

export class Home extends Component {
  render() {
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
                <input type="text" name="login" placeholder="Login" aria-label="Login" autocomplete="nickname" required></input>
                <input type='password'  name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required></input>
                <fieldset>
                  
                  <input style={{ marginBottom:'10px'}} type='checkbox' role='switch' id='remember' name='remember'></input>
                  <label style={{ marginBottom:'10px', textAlign:'center'}} for='remember'>Remember me</label>
                  
                  <button type='submit' onclick='event.preventDefault()'>Login</button>
                </fieldset>
              </form>
            </div>
            <div></div>
          </article>
        
        </main>
      </div>
    )
  }
};

export default Home