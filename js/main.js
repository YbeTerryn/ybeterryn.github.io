window.addEventListener('load', () => {
    // 1. Alle bronnen veilig samenvoegen
    // We voegen een 'type' toe zodat we later weten of het een review is of een verhaal
    const alleItems = [
        ...(typeof stories !== 'undefined' ? stories.map(s => ({...s, type: 'offer'})) : []),
        ...(typeof archiveStories !== 'undefined' ? archiveStories.map(s => ({...s, type: 'archive'})) : []),
        ...(typeof reviewStories !== 'undefined' ? reviewStories.map(r => ({...r, type: 'review'})) : [])
    ];

    if (alleItems.length > 0) {
        // 2. Het ALLERLAATSTE item uit je stories.js is de highlight
        const latest = alleItems[alleItems.length - 1];
        
        const featuredContainer = document.getElementById('featured-container');
        if (featuredContainer) {
            // Bepaal de link: externe link voor reviews, interne link voor de rest
            const link = latest.type === 'review' ? latest.link : `story.html?id=${latest.id}`;
            const target = latest.type === 'review' ? 'target="_blank"' : '';

            featuredContainer.innerHTML = `
                <div class="featured-card">
                    <span class="new-label">${latest.type === 'review' ? 'NIEUWSTE REVIEW' : 'NIEUWSTE OFFER'}</span>
                    <h4>${latest.title}</h4>
                    <p>${latest.director || latest.description || 'Ontdek mijn nieuwste toevoeging.'}</p>
                    <a href="${link}" ${target} class="read-more-btn">
                        ${latest.type === 'review' ? 'BEKIJK OP ' + latest.platform.toUpperCase() : 'LEES VERHAAL'}
                    </a>
                </div>
            `;
        }

        // 3. De lijst met eerdere toevoegingen (de 10 items vòòr de highlight)
        const updatesContainer = document.getElementById('updates-list-container');
        if (updatesContainer) {
            const overigeItems = [...alleItems].slice(0, -1).reverse(); 
            
            updatesContainer.innerHTML = overigeItems.slice(0, 10).map(item => {
                const link = item.type === 'review' ? item.link : `story.html?id=${item.id}`;
                const target = item.type === 'review' ? 'target="_blank"' : '';
                const icoon = item.type === 'review' ? '★' : '•';
                
                return `
                    <div class="update-item" style="margin-bottom: 10px;">
                        <a href="${link}" ${target} style="text-decoration: none; color: inherit;">
                            <span class="bullet" style="color: #ffd166; margin-right: 8px;">${icoon}</span> 
                            ${item.title} 
                            <small style="color: #666; margin-left: 5px;">(${item.type})</small>
                        </a>
                    </div>
                `;
            }).join('');
        }
    }
});
