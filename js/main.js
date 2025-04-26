// Wait for DOM → AR.js to be ready
window.addEventListener("load", () => {
  const btn = document.getElementById("record");
  const letterEl = document.getElementById("letter");
  let intervalId = null;

  btn.addEventListener("pointerdown", () => {
    // start rapid shuffle every 100ms
    intervalId = setInterval(() => {
      const idx = Math.floor(Math.random() * 26);
      const char = String.fromCharCode(65 + idx);
      letterEl.setAttribute("text", "value", char);
    }, 100);
  });

  btn.addEventListener("pointerup", () => {
    // stop shuffling
    clearInterval(intervalId);
    // one final pick
    const idx = Math.floor(Math.random() * 26);
    const char = String.fromCharCode(65 + idx);
    letterEl.setAttribute("text", "value", char);
  });

  // Prevent ghost mouse events after touch
  btn.addEventListener("touchend", (e) => e.preventDefault());
});
