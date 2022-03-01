//
// ---------------------------------------------------------
// Hi! Are you here to find the answer to Challenge 3?
// Scroll down to the "Read the JavaScript" section, your answer is hidden there!
// ---------------------------------------------------------
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Remove hard mode startTime
  localStorage.removeItem("startTime");

  //
  // ---------------------------------------------------------
  // Hidden password challenge
  // ---------------------------------------------------------
  //

  const hiddenPasswordSubmitBtn = document.querySelector("button.hidden-password");
  const hiddenPasswordField = document.querySelector("input.hidden-password");

  if (hiddenPasswordSubmitBtn) {
    hiddenPasswordSubmitBtn.addEventListener("click", event => {
      if (hiddenPasswordField.value == hiddenPasswordField.getAttribute("data-password")) {
        window.location.href = "/challenges/normal/bat.html";
      } else {
        throwError();
      };
    });
  };

  //
  // ---------------------------------------------------------
  // Disabled button challenge
  // ---------------------------------------------------------
  //

  const disabledBtn = document.querySelector("button[disabled]");

  if (disabledBtn) {
    disabledBtn.addEventListener("click", event => {
      window.location.href = "/challenges/normal/cow.html";
    });
  };

  //
  // ---------------------------------------------------------
  // Read the JavaScript challenge
  // ---------------------------------------------------------
  //

  if (document.body.id == "js-challenge") {
    document.addEventListener("dblclick", function (e) {
      window.location.href = "/challenges/normal/duck.html";
    });
  };

  //
  // ---------------------------------------------------------
  // Local Storage challenge
  // ---------------------------------------------------------
  //

  const storagePasswordSubmitBtn = document.querySelector("button.storage");
  const storagePasswordField = document.querySelector("input.storage");
  const storagePassword = "h0ud1n1";

  if (storagePasswordSubmitBtn) {
    localStorage.setItem("password", storagePassword);
    storagePasswordSubmitBtn.addEventListener("click", event => {
      const password = localStorage.getItem("password");
      if (storagePasswordField.value == password) {
        window.location.href = "/challenges/normal/gecko.html";
      } else {
        throwError();
      }
    });
  } else {
    localStorage.removeItem("password", storagePassword);
  };

  //
  // ---------------------------------------------------------
  // JavaScript Console challenge
  // ---------------------------------------------------------
  //

  const consolePasswordSubmitBtn = document.querySelector("button.console");
  const consolePasswordField = document.querySelector("input.console");
  const consolePassword = `pr${1+2}st${0}`;
  let clickCount = 0;
  let clickMax = 3;

  if (consolePasswordSubmitBtn) {
    console.log("-------------------------------------------------")
    console.log(`Click the submit button on this page ${clickMax - clickCount} times to receive the password.`)

    consolePasswordSubmitBtn.addEventListener("click", event => {
      if (consolePasswordField.value == consolePassword) {
        window.location.href = "/challenges/normal/hare.html";
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
});

  //
  // ---------------------------------------------------------
  // Styles challenge
  // ---------------------------------------------------------
  //

  const stylesPasswordSubmitBtn = document.querySelector("button.styles-btn");
  const stylesPasswordField = document.querySelector("input.styles-password");
  const stylesPassword = "hocus pocus"

  if (stylesPasswordSubmitBtn) {
    stylesPasswordSubmitBtn.addEventListener("click", event => {
      if (stylesPasswordField.value == stylesPassword) {
        window.location.href = "/challenges/normal/jellyfish.html";
      } else {
        throwError();
      };
    });
  };
