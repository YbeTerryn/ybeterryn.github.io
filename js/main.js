window.addEventListener('load', () => {
    // 1. De Highlight: Altijd het laatste item uit 'stories'
    if (typeof stories !== 'undefined' && stories.length > 0) {
        const latestOffer = stories[stories.length - 1];
        const featuredContainer = document.getElementById('featured-container');
        
        if (featuredContainer) {
            featuredContainer.innerHTML = `
                <div class="featured-card">
                    <span class="new-label">NIEUWSTE OFFER</span>
                    <h4>${latestOffer.title}</h4>
                    <p>${latestOffer.description || 'Ontdek het nieuwste offer voor Sesjat.'}</p>
                    <a href="story.html?id=${latestOffer.id}" class="read-more-btn">LEES</a>
                </div>
            `;
        }
    }

    // 2. De Lijst: Een mix van ALLES (behalve het highlight-verhaal)
    const updatesContainer = document.getElementById('updates-list-container');
    if (updatesContainer) {
        // We voegen alles samen en markeren het type
        const mixedItems = [
            ...(typeof stories !== 'undefined' ? stories.slice(0, -1).map(s => ({...s, type: 'offer'})) : []),
            ...(typeof archiveStories !== 'undefined' ? archiveStories.map(s => ({...s, type: 'archief'})) : []),
            ...(typeof reviewStories !== 'undefined' ? reviewStories.map(r => ({...r, type: 'review'})) : [])
        ];

        // We draaien de lijst om (nieuwste toevoegingen eerst)
        // Let op: 'reverse' werkt hier op de volgorde waarin ze in je script staan
        const listToShow = mixedItems.reverse().slice(0, 10);

        updatesContainer.innerHTML = listToShow.map(item => {
            const isReview = item.type === 'review';
            const link = isReview ? item.link : `story.html?id=${item.id}`;
            const target = isReview ? 'target="_blank"' : '';
            const icoon = isReview ? '★' : '•';
            
            return `
                <div class="update-item" style="margin-bottom: 12px;">
                    <a href="${link}" ${target} style="text-decoration: none; color: inherit; display: block;">
                        <span class="bullet" style="color: #ffd166; margin-right: 10px;">${icoon}</span>
                        <span style="font-size: 1.05rem;">${item.title}</span>
                        <span style="color: #666; font-size: 0.8rem; margin-left: 8px; text-transform: uppercase;">[${item.type}]</span>
                    </a>
                </div>
            `;
        }).join('');
    }
});
