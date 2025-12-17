// Kies de juiste container (check of dit ID in je HTML staat)
const container = document.getElementById("archive-container");

// We maken één grote lijst van de verhalen en de reviews
const allItems = [...archiveStories, ...reviewStories];

allItems.forEach(story => {
  const card = document.createElement("article");
  card.className = "card";

  // 1. Bepaal het icoontje
  let iconHtml = "";
  if (story.platform === "letterboxd") {
    iconHtml = '<i class="fab fa-letterboxd"></i> ';
  } else if (story.platform === "storygraph") {
    iconHtml = '<i class="fas fa-book-open"></i> ';
  }

  // 2. Bepaal de link (extern voor reviews, intern voor verhalen)
  const linkUrl = story.link || `story.html?id=${story.id}&type=archive`;
  const isExternal = story.link ? 'target="_blank"' : '';

  // 3. Bouw de kaart op (we gebruiken || om zowel 'date' als 'year' te ondersteunen)
  card.innerHTML = `
    <div class="card-content">
      <img src="${story.image}" alt="${story.title}" class="card-image">
      <div class="card-text">
        <h2>${story.title}</h2>
        <p class="meta">${story.date || story.year} — ${story.director || ''}</p>
        <a href="${linkUrl}" class="read-link" ${isExternal}>
          ${iconHtml}LEES ↗
        </a>
      </div>
    </div>
  `;
  container.appendChild(card);
});
