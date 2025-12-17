// Zorg dat het script pas start als de basisstructuur er is
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // 1. Zoek het verhaal
    let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

    if (story) {
        // 2. Haal de tekst op
        fetch(story.text)
            .then(res => res.text())
            .then(html => {
                // Vul de tekst en de titel
                const textContainer = document.getElementById("text-container");
                const titleElement = document.getElementById("story-title");
                
                if (textContainer) textContainer.innerHTML = html;
                if (titleElement) titleElement.innerText = story.title;

                // 3. LIKES INJECTEREN
                // We zoeken de container NU pas, nadat de tekst er staat
                const likeContainer = document.getElementById("like-container");
                
                if (likeContainer) {
                    // Injecteer de knop direct
                    likeContainer.innerHTML = `
                        <div 
                            data-lyket-type="updown" 
                            data-lyket-id="${story.id}" 
                            data-lyket-namespace="verhalen"
                            data-lyket-color-primary="#ffd166"
                        ></div>
                    `;
                    
                    // Forceer Lyket om de nieuwe HTML te scannen en te activeren
                    if (window.lyket) {
                        window.lyket.reinit();
                    }
                }

                // 4. Cusdis reacties laden
                const thread = document.getElementById("cusdis_thread");
                if (thread && window.CUSDIS) {
                    thread.setAttribute("data-page-id", story.id);
                    thread.setAttribute("data-page-title", story.title);
                    thread.setAttribute("data-page-url", window.location.href);
                    window.CUSDIS.renderTo(thread);
                }
            })
            .catch(err => console.error("Fout bij laden verhaal:", err));
    }
});
