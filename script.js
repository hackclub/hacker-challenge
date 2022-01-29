// Check if DOM is fully loaded and parsed
window.addEventListener("DOMContentLoaded", (event) => {

  console.log("Welcome to the browser inspector! You are in the Console tab, which shows you JavaScript logs and errors.");
  console.log("Click the 'Elements' tab to read the HTML.")
  console.log("Click the 'Sources' tab to read the HTML/CSS/JavaScript source files.")
  console.log("Click the 'Application' tab to read the local storage.")

  // Help section
  const helpBtn = document.querySelector(".help-button");
  const helpBlurb = document.querySelector(".help-blurb");

  if (helpBtn) {
    helpBtn.addEventListener("click", event => {
      helpBlurb.classList.toggle("hidden");
      helpBtn.classList.toggle("hidden");
    });
  };

  // Hidden password challenge
  const hiddenPasswordSubmitBtn = document.querySelector("button.hidden-password");
  const hiddenPasswordField = document.querySelector("input.hidden-password");

  if (hiddenPasswordSubmitBtn) {
    hiddenPasswordSubmitBtn.addEventListener("click", event => {
      if (hiddenPasswordField.value == hiddenPasswordField.getAttribute("data-password")) {
        window.location.href = "/challenges/2.html";
      };
    });
  };

  // Disabled button challenge
  const disabledBtn = document.querySelector("button[disabled]");

  if (disabledBtn) {
    disabledBtn.addEventListener("click", event => {
      window.location.href = "/challenges/3.html";
    });
  };

  // Read the JavaScript challenge
  if (window.location.pathname == "/challenges/3.html") {
    document.addEventListener("dblclick", function (e) {
      window.location.href = "/challenges/4.html";
    });
  };

  // Local Storage challenge
  const storagePasswordSubmitBtn = document.querySelector("button.storage");
  const storagePasswordField = document.querySelector("input.storage");
  const storage = window.localStorage;
  const storagePassword = "alacazam";

  storage.setItem("password", storagePassword);

  if (storagePasswordSubmitBtn) {
    storagePasswordSubmitBtn.addEventListener("click", event => {
      const password = localStorage.getItem("password");
      if (storagePasswordField.value == password) {
        window.location.href = "/challenges/7.html";
      }
    });
  };

  // JavaScript Console challenge
  const consolePasswordSubmitBtn = document.querySelector("button.console");
  const consolePasswordField = document.querySelector("input.console");
  const consolePassword = `1nt${1+2}rp${0}l4tion`;
  var clickCount = 0;
  var clickMax = 3;

  if (consolePasswordSubmitBtn) {
    console.log('-------------------------------------------------')
    console.log(`Click the submit button on this page ${clickMax - clickCount} times to receive the password.`)

    consolePasswordSubmitBtn.addEventListener("click", event => {
      if (consolePasswordField.value == consolePassword) {
        window.location.href = "/challenges/8.html";
      } else {
        if (clickCount >= 2) {
          console.log(`The password is ${consolePassword}`)
        } else {
          clickCount++;
          console.log(`Click the submit button on this page ${clickMax - clickCount} more times to receive the password.`)
        };
      };
    });
  };
});
