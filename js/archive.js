const container = document.getElementById("archive-container");

archiveStories.forEach(story => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-content">
      <img src="${story.image}" alt="${story.title}" class="card-image">
      <div class="card-text">
        <h2>${story.title}</h2>
        <p class="meta">${story.date}</p>
        <a href="story.html?id=${story.id}&type=archive" class="read-link">LEES</a>
      </div>
    </div>
  `;
  container.appendChild(card);
});
