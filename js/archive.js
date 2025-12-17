const container = document.getElementById("archive-container");

archiveStories.forEach(story => {
  const card = document.createElement("article");
  card.className = "card";

  // 1. Bepaal welk icoontje erbij moet
  let iconHtml = "";
  if (story.platform === "letterboxd") {
    iconHtml = '<i class="fab fa-letterboxd"></i> ';
  } else if (story.platform === "storygraph") {
    iconHtml = '<i class="fas fa-book-open"></i> ';
  }

  // 2. Bouw het kaartje op
  card.innerHTML = `
    <div class="card-content">
      <img src="${story.image}" alt="${story.title}" class="card-image">
      <div class="card-text">
        <h2>${story.title}</h2>
        <p class="meta">${story.date} — ${story.author || ''}</p>
        <a href="${story.link || `story.html?id=${story.id}&type=archive`}" class="read-link" target="${story.platform ? '_blank' : '_self'}">
          ${iconHtml}LEES ↗
        </a>
      </div>
    </div>
  `;
  container.appendChild(card);
});
