const container = document.getElementById("top-stories");

stories
  .sort((a, b) => b.likes - a.likes)
  .slice(0, 3)
  .forEach(story => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.date}</p>
      <a href="story.html?id=${story.id}">Lees</a>
    `;
    container.appendChild(card);
  });
