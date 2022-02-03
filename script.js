//
// ---------------------------------------------------------
// Hi! Are you here to find the answer to Challenge 3?
// Scroll down to the "Read the JavaScript" section, your answer is hidden there!
// ---------------------------------------------------------
//

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
      helpBtn.classList.toggle("closed");
    });
  };

  // Press enter to submit
  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const btn = document.querySelector("button[type='submit']");
      btn && btn.click();
    }
  });

  // Hidden password challenge
  const hiddenPasswordSubmitBtn = document.querySelector("button.hidden-password");
  const hiddenPasswordField = document.querySelector("input.hidden-password");

  if (hiddenPasswordSubmitBtn) {
    hiddenPasswordSubmitBtn.addEventListener("click", event => {
      if (hiddenPasswordField.value == hiddenPasswordField.getAttribute("data-password")) {
        window.location.href = "/challenges/bat.html";
      } else {
        throwError();
      };
    });
  };

  // Disabled button challenge
  const disabledBtn = document.querySelector("button[disabled]");

  if (disabledBtn) {
    disabledBtn.addEventListener("click", event => {
      window.location.href = "/challenges/cow.html";
    });
  };

  // Read the JavaScript challenge
  if (document.body.id == "js-challenge") {
    document.addEventListener("dblclick", function (e) {
      window.location.href = "/challenges/duck.html";
    });
  };

  // Local Storage challenge
  const storagePasswordSubmitBtn = document.querySelector("button.storage");
  const storagePasswordField = document.querySelector("input.storage");
  const storagePassword = "h0ud1n1";

  if (storagePasswordSubmitBtn) {
    localStorage.setItem("password", storagePassword);
    storagePasswordSubmitBtn.addEventListener("click", event => {
      const password = localStorage.getItem("password");
      if (storagePasswordField.value == password) {
        window.location.href = "/challenges/gecko.html";
      } else {
        throwError();
      }
    });
  } else {
    storage.removeItem("password", storagePassword);
  };

  // JavaScript Console challenge
  const consolePasswordSubmitBtn = document.querySelector("button.console");
  const consolePasswordField = document.querySelector("input.console");
  const consolePassword = `pr${1+2}st${0}`;
  let clickCount = 0;
  let clickMax = 3;

  if (consolePasswordSubmitBtn) {
    console.log('-------------------------------------------------')
    console.log(`Click the submit button on this page ${clickMax - clickCount} times to receive the password.`)

    consolePasswordSubmitBtn.addEventListener("click", event => {
      if (consolePasswordField.value == consolePassword) {
        window.location.href = "/challenges/hare.html";
      } else {
        throwError();

        if (clickCount >= 2) {
          console.log(`The password is ${consolePassword}`)
        } else {
          clickCount++;
          console.log(`Click the submit button on this page ${clickMax - clickCount} more times to receive the password.`)
        };
      };
    });
  };

  // Styles challenge
  const stylesPasswordSubmitBtn = document.querySelector("button.styles-btn");
  const stylesPasswordField = document.querySelector("input.styles-password");
  const stylesPassword = "hocus pocus"

  if (stylesPasswordSubmitBtn) {
    stylesPasswordSubmitBtn.addEventListener("click", event => {
      if (stylesPasswordField.value == stylesPassword) {
        window.location.href = "/complete.html";
      } else {
        throwError();
      };
    });
  };

  // Form error handling
  let errorTimer;

  function throwError() {
    clearTimeout(errorTimer);

    document.querySelector(".error").classList.remove("hidden");

    errorTimer = setTimeout(() => {
      document.querySelector(".error").classList.add("hidden");
    }, 3000);
  }
});
