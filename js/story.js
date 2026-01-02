document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("archive-container") || 
                      document.getElementById("reviews-container") || 
                      document.getElementById("main-container");

    if (!container) {
        console.error("Fout: Geen container gevonden om de kaarten in te plaatsen.");
        return;
    }

    // Verzamelen van alle data uit de verschillende lijsten
    let allItems = [];
    if (typeof stories !== 'undefined') allItems = [...allItems, ...stories];
    if (typeof archiveStories !== 'undefined') allItems = [...allItems, ...archiveStories];
    if (typeof reviewStories !== 'undefined') allItems = [...allItems, ...reviewStories];

    // Functie om de items te tonen (met filter optie)
    function displayItems(filterValue = "all") {
        container.innerHTML = ""; // Leeg de container

        const filteredItems = allItems.filter(item => {
            if (filterValue === "all") return true;
            return item.platform === filterValue;
        });

        if (filteredItems.length === 0) {
            container.innerHTML = "<p>Geen resultaten gevonden voor deze categorie.</p>";
            return;
        }

        filteredItems.forEach(story => {
            const card = document.createElement("article");
            card.className = "card";

            // Icoon bepalen op basis van platform
            let iconHtml = "";
            if (story.platform === "letterboxd") {
                iconHtml = '<i class="fab fa-letterboxd"></i> ';
            } else if (story.platform === "storygraph") {
                iconHtml = '<i class="fas fa-book-open"></i> ';
            }

            const linkUrl = story.link || `story.html?id=${story.id}`;
            const isExternal = story.link ? 'target="_blank"' : '';

            card.innerHTML = `
                <div class="card-content">
                    <img src="${story.image}" alt="${story.title}" class="card-image">
                    <div class="card-text">
                        <h2>${story.title}</h2>
                        <p class="meta">${story.year || ''} ${story.director ? '— ' + story.director : ''}</p>
                        <a href="${linkUrl}" class="read-link" ${isExternal}>
                            ${iconHtml}LEES ↗
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Koppel de klik-event aan de knoppen
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Verwijder 'active' klasse van alle knoppen en voeg toe aan de geklikte
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Haal de filterwaarde op en voer de functie uit
            const filter = this.getAttribute('data-filter');
            displayItems(filter);
        });
    });

    // Toon alle items bij het laden van de pagina
    displayItems();
});
