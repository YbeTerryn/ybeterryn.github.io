// Wacht tot de basispagina geladen is
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

    if (story) {
        fetch(story.text)
            .then(res => res.text())
            .then(html => {
                // 1. Vul de tekst
                document.getElementById("text-container").innerHTML = html;
                document.getElementById("story-title").innerText = story.title;

                // 2. Injecteer de like-knop
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
                    
                    // Forceer Lyket om te scannen
                    if (window.lyket) {
                        window.lyket.reinit();
                    }
                }

                // 3. Cusdis configureren
                const thread = document.getElementById("cusdis_thread");
                if (thread && window.CUSDIS) {
                    thread.setAttribute("data-page-id", story.id);
                    thread.setAttribute("data-page-title", story.title);
                    thread.setAttribute("data-page-url", window.location.href);
                    window.CUSDIS.renderTo(thread);
                }
            });
    }
});
