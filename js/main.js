window.addEventListener('load', () => {
    // Helper functie voor de link
    const getLink = (item) => {
        const slug = item.id || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `story.html?id=${slug}`;
    };

    // 1. De Highlight (Nieuwste offer)
    if (typeof stories !== 'undefined' && stories.length > 0) {
        const latestOffer = stories[stories.length - 1];
        const featuredContainer = document.getElementById('featured-container');
        
        if (featuredContainer) {
            featuredContainer.innerHTML = `
                <a href="${getLink(latestOffer)}" class="featured-card">
                    <span class="new-label">Nieuwste offer aan Sesjat</span>
                    <h4>${latestOffer.title}</h4>
                    <p class="featured-desc">${latestOffer.description || 'Een raamvertelling in wording...'}</p>
                    <span class="read-more-btn">Lees verder</span>
                </a>
            `;
        }
    }

    // 2. De Lijst (Alleen Reviews, zonder tags, met tekst)
    const updatesContainer = document.getElementById('updates-list-container');
    if (updatesContainer) {
        // Filter alleen op reviews, pak de laatste 6 en draai ze om
        const listToShow = (typeof reviewStories !== 'undefined' ? reviewStories : []).slice(-6).reverse();

        updatesContainer.innerHTML = `
            <h3 class="updates-title">Reviews</h3>
            ${listToShow.map(item => `
                <div class="update-item">
                    <a href="${getLink(item)}">
                        <div class="review-header">
                            <span class="bullet">★</span>
                            <span class="item-title">${item.title}</span>
                        </div>
                        ${item.description ? `<p class="item-excerpt">${item.description.substring(0, 80)}...</p>` : ''}
                    </a>
                </div>
            `).join('')}
        `;
    }
});
