import React from "react";
import "../signin.css";
import Home from "./Login.js";

function About() {
  return (
    <div class="container">
      <main class="container">
        <link
          rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"
        ></link>
        <article class="grid" style={{ marginTop: "20%" }}>
          <ul>
            <li style={{ listStyleType: "none" }}>
              <ul>
                <li style={{ listStyleType: "none" }}>
                  <a href="./" onClick={Home}>
                    Home
                  </a>
                  <h4>Contact us</h4>
                </li>
              </ul>

              <a href="./About.js">
                <strong>ABOUT US</strong>
              </a>

              <p>
                lorem ipsum some textlorem ipsum some textlorem ipsum some
                textlorem lorem ipsum some textlorem ipsum some textlorem ipsum
                some text ipsum some textlorem ipsum some text
              </p>
            </li>
          </ul>

          <form class="contact-form">
            <input placeholder="Name" id="name" required></input>
            <input
              placeholder="Your mail"
              id="emaiLValidation.js"
              required
            ></input>
            <input
              placeholder="your message"
              className="button"
              type="text"
              required
            ></input>
            <button>Send mail</button>
          </form>
        </article>

        <article class="grid">
          <h1>chatbox example</h1>
        </article>

        <script src="../functions/emaiLValidation.js"></script>
      </main>
    </div>
  );
}

export default About;
