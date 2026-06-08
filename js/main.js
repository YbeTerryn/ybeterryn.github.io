window.addEventListener('load', () => {
    // 1. De Highlight (Nieuwste offer)
    if (typeof stories !== 'undefined' && stories.length > 0) {
        const latestOffer = stories[stories.length - 1];
        const featuredContainer = document.getElementById('featured-container');
        
        if (featuredContainer) {
            // We maken de hele div klikbaar door de link om de inhoud te wikkelen
            featuredContainer.innerHTML = `
                <a href="story.html?id=${latestOffer.id}" class="featured-card" style="display: block; text-decoration: none; color: inherit;">
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

        // We plaatsen de HTML in het container-element
        updatesContainer.innerHTML = `
            <h3 style="color: #ffd166; margin-bottom: 20px;">Reviews</h3>
            ${listToShow.map(item => {
                const isReview = item.type === 'review';
                const link = isReview ? item.link : `story.html?id=${item.id}`;
                const target = isReview ? 'target="_blank"' : '';
                const icoon = isReview ? '★' : '•';
                
                return `
                    <div class="update-item" style="position: relative; margin-bottom: 12px; padding: 10px; border-radius: 4px; transition: 0.2s;">
                        <a href="${link}" ${target} style="text-decoration: none; color: inherit; display: block;">
                            <span class="bullet" style="color: #ffd166; margin-right: 10px;">${icoon}</span>
                            <span style="font-size: 1.05rem;">${item.title}</span>
                            <span style="color: #666; font-size: 0.8rem; margin-left: 8px; text-transform: uppercase;">[${item.type}]</span>
                        </a>
                    </div>
                `;
            }).join('')}
        `;
    }
});
