import React, { useEffect } from "react";
import * as ReactDOM from "react-dom";
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from "react-chrome-extension-router";

import logo from "../assets/images/wallet.png";
import "././Css/WelcomePage.css";
import PhishingWarningPage from "./Components/PhishingWarningPage/PhishingWarningPage";

// component for welcome page.
const WelcomePage = () => {
  const init = () => {
    let timer = setInterval(() => {
      let msgElem = document.querySelector("df-messenger");
      if (!msgElem) return;
      if (!msgElem.shadowRoot) return;
      if (!msgElem.shadowRoot.querySelector("df-messenger-chat")) return;
      if (!msgElem.shadowRoot.querySelector("df-messenger-chat").shadowRoot)
        return;
      if (
        !msgElem.shadowRoot
          .querySelector("df-messenger-chat")
          .shadowRoot.querySelector("df-message-list")
      )
        return;
      if (
        !msgElem.shadowRoot
          .querySelector("df-messenger-chat")
          .shadowRoot.querySelector("df-message-list").shadowRoot
      )
        return;
      if (
        !msgElem.shadowRoot
          .querySelector("df-messenger-chat")
          .shadowRoot.querySelector("df-message-list")
          .shadowRoot.querySelector("#messageList")
      )
        return;

      let closeBtn = msgElem.shadowRoot
        .querySelector("df-messenger-chat")
        .shadowRoot.querySelector("df-message-list")
        .shadowRoot.querySelector("#dismissIcon");

      if (closeBtn) closeBtn.setAttribute("aria-hidden", "true");

      let chatCloseBtn = msgElem.shadowRoot
        .querySelector("df-messenger-chat")
        .shadowRoot.querySelector("df-message-list")
        .shadowRoot.querySelector("#closeIcon");

      if (chatCloseBtn) chatCloseBtn.setAttribute("aria-label", "live chat found.");

      let messageContainer = msgElem.shadowRoot
        .querySelector("df-messenger-chat")
        .shadowRoot.querySelector("df-message-list")
        .shadowRoot.querySelector("#messageList");

      if (messageContainer.textContent.includes("..")) return;
      clearInterval(timer);
      messageContainer.click();

      readMessages(messageContainer);
    }, 100);
  };

  const readMessages = (messageContainer) => {
    let msgElem = document.querySelector("df-messenger");
    let inputbox = msgElem.shadowRoot
      .querySelector("df-messenger-chat")
      .shadowRoot.querySelector("df-messenger-user-input")
      .shadowRoot.querySelector("input");

    window.addEventListener("keyup", (e) => {
      if (e.key === "F3") inputbox.focus();
    });
    inputbox.setAttribute("aria-label", "Press Enter to send your message.");
    inputbox.addEventListener("keyup", (e) => {
      if (e.key === "Enter") readMessages(messageContainer);
    });
    readNewMessages(messageContainer);
  };

  const readNewMessages = (messageContainer) => {
    setTimeout(() => {
      let timer = setInterval(() => {
        let botReplies = messageContainer.querySelectorAll(".bot-message");
        let lastReply = botReplies[botReplies.length - 1];
        if (lastReply.textContent.includes("..")) return;
        clearInterval(timer);

        lastReply.setAttribute(
          "aria-label",
          `${botReplies.length > 1 ? "reply" : "Message"} from Chatbot: ${
            lastReply.textContent
          }. Press F3 to focus on message input box`
        );
        lastReply.setAttribute("tabindex", 0);
        lastReply.focus();
      }, 100);
    }, 1000);
  };
  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      console.log(e);
      if (e.key === "F2") init();
    });
  }, []);

  return (
    <>
      <div class="container-fluid">
        <div className="welcome-section">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div className="welcome-content">
            <h2 role="presentation" aria-level="1">
              Welcome to MetaMask
            </h2>
            <h5 role="presentation">
              Connecting you to Ethereum and the Decentralized web.
            </h5>
            <h5 className="child2" role="presentation">
              We are happy to see you.
            </h5>
          </div>
          <div>
            <button
              onClick={() => goTo(PhishingWarningPage)}
              id="GetStartedBtn"
              role="button"
            >
              Get Started
            </button>
          </div>
          <hidden
            aria-label="Press the F2 key to go to the chat"
            role="heading"
          />
        </div>
      </div>
    </>
  );
};

// component for app.js
function App() {
  return (
    <div className="App">
      <Router>
        <WelcomePage />
      </Router>
    </div>
  );
}

export default App;
