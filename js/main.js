window.addEventListener('load', () => {
    // We checken of de stories array bestaat (uit stories.js)
    if (typeof stories !== 'undefined' && stories.length > 0) {
        
        // 1. Highlight: Het allernieuwste verhaal (onderaan de lijst in stories.js)
        const latest = stories[stories.length - 1];
        const featuredContainer = document.getElementById('featured-container');
        
        if (featuredContainer) {
            featuredContainer.innerHTML = `
                <div class="featured-card">
                    <span class="new-label">NIEUWSTE OFFER</span>
                    <h4>${latest.title}</h4>
                    <p>${latest.description || 'Ontdek het volgend verhaal.'}</p>
                    <a href="story.html?id=${latest.id}" class="read-more-btn">
                        Lees→
                    </a>
                </div>
            `;
        }

        // 2. Recent toegevoegd: De rest van de verhalen (behalve de laatste)
        const updatesContainer = document.getElementById('updates-list-container');
        if (updatesContainer) {
            // Pak alles behalve de laatste, en draai ze om zodat de nieuwste bovenaan staan
            const overigeVerhalen = [...stories].slice(0, -1).reverse(); 
            
            // We tonen bijvoorbeeld de laatste 5 toevoegingen
            updatesContainer.innerHTML = overigeVerhalen.slice(0, 5).map(s => `
                <div class="update-item">
                    <a href="story.html?id=${s.id}">
                        <span class="bullet">•</span> ${s.title}
                    </a>
                </div>
            `).join('');
        }
    }
});
