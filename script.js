// A tiny sprinkle of birthday magic. The website works without JavaScript too.
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  document.body.dataset.ready = "true";
  // Update the browser tab title with a heart on supported pages.
  if (!document.title.includes("♡") && !document.title.includes("💗")) {
    document.title += " ♡";
  }
});
