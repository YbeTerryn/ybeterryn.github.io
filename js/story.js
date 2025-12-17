window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // 1. Zoek het verhaal
    let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

    if (!story) {
        const container = document.getElementById("text-container");
        if(container) container.innerHTML = "<p>Schrijfsel niet gevonden.</p>";
    } else {
        // 2. Haal de tekst op
        fetch(story.text)
            .then(res => {
                if (!res.ok) throw new Error('Bestand niet gevonden');
                return res.text();
            })
            .then(html => {
                // Vul tekst en titel
                document.getElementById("text-container").innerHTML = html;
                if(document.getElementById("story-title")) {
                    document.getElementById("story-title").innerText = story.title;
                }

                // 3. LIKES INJECTEREN (Dit moet binnen de .then gebeuren!)
                const likeContainer = document.getElementById("like-container");
                if (likeContainer) {
                    likeContainer.innerHTML = `
                        <div 
                            data-lyket-type="updown" 
                            data-lyket-id="${story.id}" 
                            data-lyket-namespace="verhalen"
                            data-lyket-color-primary="#ffd166"
                        ></div>
                    `;
                    if (window.lyket) {
                        window.lyket.reinit();
                    }
                }

                // 4. Cusdis laden
                const thread = document.getElementById("cusdis_thread");
                if (thread && window.CUSDIS) {
                    thread.setAttribute("data-page-id", story.id);
                    thread.setAttribute("data-page-title", story.title);
                    thread.setAttribute("data-page-url", window.location.href);
                    window.CUSDIS.renderTo(thread);
                }
            })
            .catch(err => console.error("Fout:", err));
    }
});
