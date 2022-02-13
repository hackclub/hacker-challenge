window.addEventListener("DOMContentLoaded", (event) => {
  const endTime = localStorage.getItem("endTime");
  const startTime = localStorage.getItem("startTime");

  function formatTime(t) {
    return t.toString().substring(0, 2).padStart(2, '0')
  }

  if (localStorage.getItem("startTime")) {
    const timerEl = document.querySelector(".timer");
    const timeSinceStart = new Date((endTime - startTime));

    const minutes = formatTime(timeSinceStart.getMinutes());
    const seconds = formatTime(timeSinceStart.getSeconds());
    const milliseconds = formatTime(timeSinceStart.getMilliseconds());

    timerEl.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  };
});
