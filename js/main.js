window.addEventListener('load', () => {
    // Helper functie: Alles gaat nu naar story.html
    const getLink = (item) => {
        // Gebruik de ID als die bestaat, anders maak een slug van de titel
        const slug = item.id || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `story.html?id=${slug}`;
    };

    // 1. De Highlight (Nieuwste offer)
    if (typeof stories !== 'undefined' && stories.length > 0) {
        const latestOffer = stories[stories.length - 1];
        const featuredContainer = document.getElementById('featured-container');
        
        if (featuredContainer) {
            featuredContainer.innerHTML = `
                <a href="${getLink(latestOffer)}" class="featured-card" style="display: block; text-decoration: none; color: inherit;">
                    <span class="new-label">NIEUWSTE OFFER</span>
                    <h4>${latestOffer.title}</h4>
                    <p>${latestOffer.description || 'Ontdek het nieuwste verhaal in de raamvertelling'}</p>
                    <span class="read-more-btn">LEES</span>
                </a>
            `;
        }
    }

    // 2. De Lijst
    const updatesContainer = document.getElementById('updates-list-container');
    if (updatesContainer) {
        const mixedItems = [
            ...(typeof stories !== 'undefined' ? stories.slice(0, -1).map(s => ({...s, type: 'offer'})) : []),
            ...(typeof archiveStories !== 'undefined' ? archiveStories.map(s => ({...s, type: 'archief'})) : []),
            ...(typeof reviewStories !== 'undefined' ? reviewStories.map(r => ({...r, type: 'review'})) : [])
        ];

        const listToShow = mixedItems.reverse().slice(0, 10);

        updatesContainer.innerHTML = `
            <h3 style="color: #ffd166; margin-bottom: 20px;">Recent</h3>
            ${listToShow.map(item => {
                // We hoeven hier geen onderscheid meer te maken voor de link of target
                return `
                    <div class="update-item" style="position: relative; margin-bottom: 12px; padding: 10px; border-radius: 4px; transition: 0.2s;">
                        <a href="${getLink(item)}" style="text-decoration: none; color: inherit; display: block;">
                            <span class="bullet" style="color: #ffd166; margin-right: 10px;">•</span>
                            <span style="font-size: 1.05rem;">${item.title}</span>
                            <span style="color: #666; font-size: 0.8rem; margin-left: 8px; text-transform: uppercase;">[${item.type}]</span>
                        </a>
                    </div>
                `;
            }).join('')}
        `;
    }
});
