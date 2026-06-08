window.addEventListener('load', () => {
    const getLink = (item) => `story.html?id=${item.id || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    // 1. Highlight (Nieuwste offer)
    if (typeof stories !== 'undefined' && stories.length > 0) {
        const latestOffer = stories[stories.length - 1];
        const container = document.getElementById('featured-container');
        if (container) {
            container.innerHTML = `
                <a href="${getLink(latestOffer)}" class="featured-card">
                    <span class="new-label">Nieuwste offer aan Sesjat</span>
                    <h4>${latestOffer.title}</h4>
                    <p id="featured-preview" class="featured-desc">Laden...</p>
                    <span class="read-more-btn">Verder lezen</span>
                </a>
            `;
            fetch(latestOffer.text)
                .then(r => r.text())
                .then(html => {
                    const p = new DOMParser().parseFromString(html, 'text/html').querySelector('p');
                    const el = document.getElementById('featured-preview');
                    if (el) el.innerText = p ? p.innerText.substring(0, 150) + '...' : 'Geen preview.';
                });
        }
    }

    // 2. Recent lijst (Beperkt tot 5 items voor betere balans)
    const updatesContainer = document.getElementById('updates-list-container');
    if (updatesContainer) {
        const items = [
            ...(typeof stories !== 'undefined' ? stories.slice(0, -1).map(s => ({...s, type: 'offer'})) : []),
            ...(typeof reviewStories !== 'undefined' ? reviewStories.map(r => ({...r, type: 'review'})) : [])
        ].reverse().slice(0, 5);

        updatesContainer.innerHTML = `
            <h3 class="updates-title">Recent</h3>
            ${items.map(item => `
                <div class="update-item">
                    <a href="${getLink(item)}">${item.title}</a>
                </div>
            `).join('')}
        `;
    }
});
