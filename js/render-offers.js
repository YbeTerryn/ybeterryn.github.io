const container = document.getElementById("offers");

stories.forEach(story => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${story.title}</h2>
    <p>${story.date}</p>
    <a href="story.html?id=${story.id}">Breng dit offer</a>
  `;
  container.appendChild(card);
});
