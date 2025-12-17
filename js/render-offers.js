const container = document.getElementById("offers");

stories.slice().reverse()forEach(story => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h2>${story.title}</h2>
    <p class="meta">${story.date}</p>
    <a href="story.html?id=${story.id}">Lees</a>
  `;
  container.appendChild(card);
});
