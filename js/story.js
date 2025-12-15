const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const story = stories.find(s => s.id === id);

// laad tekst
fetch(story.text)
  .then(res => res.text())
  .then(html => {
    document.getElementById("text-container").innerHTML = html;
  });

// PDF download link
document.getElementById("pdf-link").href = story.pdf;
