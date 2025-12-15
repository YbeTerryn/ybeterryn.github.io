const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const story = stories.find(s => s.id === id);

if (!story) {
  document.getElementById("text-container").innerHTML =
    "<p>Schrijfsel niet gevonden.</p>";
} else {
  fetch(story.text)
    .then(res => res.text())
    .then(html => {
      document.getElementById("text-container").innerHTML = html;

      // Cusdis metadata instellen
      const thread = document.getElementById("cusdis_thread");
      thread.setAttribute("data-page-id", story.id);
      thread.setAttribute("data-page-title", story.title);
      thread.setAttribute("data-page-url", window.location.href);

      // Cusdis opnieuw laden (belangrijk!)
      if (window.CUSDIS) {
        window.CUSDIS.renderTo(thread);
      }
    });
}
