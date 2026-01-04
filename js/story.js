window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("main-container");
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll('.filter-btn');

    let currentList = [];
    const pageTitle = document.title;
    
    // 1. Selecteer de JUISTE lijst op basis van de pagina waar je bent
    if (pageTitle.includes("Offers")) {
        currentList = typeof stories !== 'undefined' ? stories : [];
    } else if (pageTitle.includes("Archief")) {
        currentList = typeof archiveStories !== 'undefined' ? archiveStories : [];
    } else if (pageTitle.includes("Reviews")) {
        // Belangrijk: we kijken of reviewStories bestaat, anders vallen we terug op stories
        currentList = typeof reviewStories !== 'undefined' ? reviewStories : (typeof stories !== 'undefined' ? stories : []);
    }

    let activePlatform = "all";

    function render() {
        if (!container) return;
        container.innerHTML = "";
        
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

        // 2. Filter op platform EN zoekterm tegelijk
        const filtered = currentList.filter(item => {
            const title = item.title ? item.title.toLowerCase() : "";
            const director = item.director ? item.director.toLowerCase() : "";
            const year = item.year ? item.year.toString() : "";

            const matchesSearch = title.includes(searchTerm) || 
                                 director.includes(searchTerm) || 
                                 year.includes(searchTerm);
            
            const matchesPlatform = (activePlatform === "all" || item.platform === activePlatform);

            return matchesSearch && matchesPlatform;
        });

        // 3. Toon de resultaten (nieuwste bovenaan)
        if (filtered.length === 0) {
            container.innerHTML = "<p class='no-results'>Niets gevonden...</p>";
            return;
        }

        [...filtered].reverse().forEach(item => {
            const card = document.createElement("article");
            card.className = "card";
            
            let iconHtml = "";
            if (item.platform === "letterboxd") {
                iconHtml = '<i class="fab fa-letterboxd"></i> ';
            } else if (item.platform === "storygraph") {
                iconHtml = '<i class="fas fa-book-open"></i> ';
            }
            
            const isExternal = !!item.link;
            const link = isExternal ? item.link : `story.html?id=${item.id}`;
            const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
            // Gebruik LEES ↗ voor externe links, en gewoon LEES voor interne
            const buttonText = isExternal ? `${iconHtml}LEES ↗` : 'LEES';

            card.innerHTML = `
                <div class="card-content">
                    <img src="${item.image}" alt="${item.title}" class="card-image">
                    <div class="card-text">
                        <h2>${item.title}</h2>
                        <p class="meta">${item.year || item.date || ""}</p>
                        ${item.director ? `<p class="meta-info"><em>${item.director}</em></p>` : ""}
                        <a href="${link}" ${target} class="read-link">${buttonText}</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 4. Koppel de filterknoppen
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activePlatform = this.getAttribute('data-filter');
            render();
        });
    });

    // 5. Koppel de zoekbalk
    if (searchInput) {
        searchInput.addEventListener('input', render);
    }

    // Initieel uitvoeren
    render();
});
