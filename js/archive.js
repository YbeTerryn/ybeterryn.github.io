const container = document.getElementById("archive-container") || document.getElementById("reviews-container") || document.getElementById("main-container");

if (container) {
    let allItems = [];
    if (typeof stories !== 'undefined') allItems = [...allItems, ...stories];
    if (typeof archiveStories !== 'undefined') allItems = [...allItems, ...archiveStories];
    if (typeof reviewStories !== 'undefined') allItems = [...allItems, ...reviewStories];

    // Functie om de items te tonen
    function displayItems(filter = "all") {
        container.innerHTML = ""; // Maak container leeg

        const filteredItems = allItems.filter(item => {
            if (filter === "all") return true;
            return item.platform === filter;
        });

        filteredItems.forEach(story => {
            const card = document.createElement("article");
            card.className = "card";

            let iconHtml = story.platform === "letterboxd" ? '<i class="fab fa-letterboxd"></i> ' : 
                           story.platform === "storygraph" ? '<i class="fas fa-book-open"></i> ' : "";

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

    // Event listeners voor de knoppen
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update actieve knop stijl
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Filter de items
            displayItems(e.target.getAttribute('data-filter'));
        });
    });

    // Initialiseer de pagina
    displayItems();
}
