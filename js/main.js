window.addEventListener('load', () => {
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

    // 2. De Lijst: Alle items met een excerpt
    const updatesContainer = document.getElementById('updates-list-container');
    if (updatesContainer) {
        // Verzamel alle verhalen
        const mixedItems = [
            ...(typeof stories !== 'undefined' ? stories.slice(0, -1).map(s => ({...s, type: 'offer'})) : []),
            ...(typeof archiveStories !== 'undefined' ? archiveStories.map(s => ({...s, type: 'archief'})) : []),
            ...(typeof reviewStories !== 'undefined' ? reviewStories.map(r => ({...r, type: 'review'})) : [])
        ];

        // Pak de laatste 6
        const listToShow = mixedItems.reverse().slice(0, 6);

        updatesContainer.innerHTML = `
            <h3 class="updates-title">Recent</h3>
            ${listToShow.map(item => `
                <div class="update-item">
                    <a href="${getLink(item)}">
                        <div class="review-header">
                            <span class="bullet">${item.type === 'review' ? '★' : '•'}</span>
                            <span class="item-title">${item.title}</span>
                        </div>
                        <p class="item-excerpt">
                            ${item.description ? item.description.substring(0, 100) + '...' : 'Klik om verder te lezen...'}
                        </p>
                    </a>
                </div>
            `).join('')}
        `;
    }
});
