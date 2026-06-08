window.addEventListener('load', () => {
    // Helper functie voor de link
    const getLink = (item) => {
        const slug = item.id || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `story.html?id=${slug}`;
    };

    // 1. De Highlight (Nieuwste offer - automatische preview uit HTML)
    if (typeof stories !== 'undefined' && stories.length > 0) {
        const latestOffer = stories[stories.length - 1];
        const featuredContainer = document.getElementById('featured-container');
        
        if (featuredContainer) {
            // Eerst de basis renderen
            featuredContainer.innerHTML = `
                <a href="${getLink(latestOffer)}" class="featured-card">
                    <span class="new-label">Nieuwste offer aan Sesjat</span>
                    <h4>${latestOffer.title}</h4>
                    <p id="featured-preview" class="featured-desc">Laden...</p>
                    <span class="read-more-btn">Verder lezen</span>
                </a>
            `;

            // Tekst ophalen uit het HTML bestand
            fetch(latestOffer.text)
                .then(response => response.text())
                .then(html => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    const firstParagraph = tempDiv.querySelector('p');
                    const previewElement = document.getElementById('featured-preview');
                    if (previewElement) {
                        previewElement.innerText = firstParagraph ? 
                            firstParagraph.innerText.substring(0, 250) + '...' : 
                            'Een raamvertelling in wording...';
                    }
                })
                .catch(() => {
                    document.getElementById('featured-preview').innerText = 'Een raamvertelling in wording...';
                });
        }
    }

    // 2. De Lijst (Schoon, geen tags, geen tekst-preview)
    const updatesContainer = document.getElementById('updates-list-container');
    if (updatesContainer) {
        const mixedItems = [
            ...(typeof stories !== 'undefined' ? stories.slice(0, -1).map(s => ({...s, type: 'offer'})) : []),
            ...(typeof archiveStories !== 'undefined' ? archiveStories.map(s => ({...s, type: 'archief'})) : []),
            ...(typeof reviewStories !== 'undefined' ? reviewStories.map(r => ({...r, type: 'review'})) : [])
        ];

        const listToShow = mixedItems.reverse().slice(0, 10);

        updatesContainer.innerHTML = `
            <h3 class="updates-title">Recent</h3>
            ${listToShow.map(item => `
                <div class="update-item">
                    <a href="${getLink(item)}">
                        <span class="bullet">${item.type === 'review' ? '★' : '•'}</span>
                        <span class="item-title">${item.title}</span>
                    </a>
                </div>
            `).join('')}
        `;
    }
});
