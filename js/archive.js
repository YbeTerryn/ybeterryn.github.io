// 1. Zoek de container
const container = document.getElementById("archive-container") || document.getElementById("reviews-container") || document.getElementById("main-container");

if (container) {
    // 2. Maak een lege lijst en voeg alleen toe wat bestaat
    let allItems = [];
    if (typeof stories !== 'undefined') allItems = [...allItems, ...stories];
    if (typeof archiveStories !== 'undefined') allItems = [...allItems, ...archiveStories];
    if (typeof reviewStories !== 'undefined') allItems = [...allItems, ...reviewStories];

    // 3. Toon de kaartjes
    allItems.forEach(story => {
        const card = document.createElement("article");
        card.className = "card";

        // Bepaal icoon
        let iconHtml = "";
        if (story.platform === "letterboxd") {
            iconHtml = '<i class="fab fa-letterboxd"></i> ';
        } else if (story.platform === "storygraph") {
            iconHtml = '<i class="fas fa-book-open"></i> ';
        }

        // Bepaal link en target
        const linkUrl = story.link || `story.html?id=${story.id}`;
        const isExternal = story.link ? 'target="_blank"' : '';

        card.innerHTML = `
            <div class="card-content">
                <img src="${story.image}" alt="${story.title}" class="card-image">
                <div class="card-text">
                    <h2>${story.title}</h2>
                    <p class="meta">${story.date || story.year || ''} ${story.director ? '— ' + story.director : ''}</p>
                    <a href="${linkUrl}" class="read-link" ${isExternal}>
                        ${iconHtml}LEES ↗
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
