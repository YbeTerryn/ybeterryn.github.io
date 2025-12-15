const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const story = stories.find(s => s.id === id);

document.getElementById("title").textContent = story.title;
document.getElementById("reader").src = story.pdf;
