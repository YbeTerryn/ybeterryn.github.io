/**
 * Script voor de verhalenpagina (story.html)
 * Verantwoordelijk voor het laden van tekst, likes en reacties.
 */

window.addEventListener('load', () => {
    // 1. Haal het ID op uit de URL (bijv. ?id=prelude)
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("id");

    // 2. Zoek het bijbehorende verhaal in stories.js (bevat stories en archiveStories)
    const allStories = [...(typeof stories !== 'undefined' ? stories : []), ...(typeof archiveStories !== 'undefined' ? archiveStories : [])];
    const story = allStories.find(s => s.id === storyId);

    if (story) {
        // 3. Haal de tekst (HTML-bestand) op van de server/GitHub
        fetch(story.text)
            .then(res => {
                if (!res.ok) throw new Error('Bestand niet gevonden');
                return res.text();
            })
            .then(htmlContent => {
                // Vul de tekst en titel op de pagina
                const textContainer = document.getElementById("text-container");
                const titleElement = document.getElementById("story-title");

                if (textContainer) textContainer.innerHTML = htmlContent;
                if (titleElement) titleElement.innerText = story.title;

                // 4. LIKES UPDATEN
                const likeBtn = document.getElementById("like-container");
                if (likeBtn) {
                    // Zet het correcte ID voor Lyket
                    likeBtn.setAttribute("data-lyket-id", story.id);
                    
                    // Re-initialiseer Lyket zodat de knop geladen wordt
                    if (window.lyket) {
                        window.lyket.reinit();
                    }
                }

                // 5. CUSDIS REACTIES UPDATEN
                const cusdisThread = document.getElementById("cusdis_thread");
                if (cusdisThread && window.CUSDIS) {
                    cusdisThread.setAttribute("data-page-id", story.id);
                    cusdisThread.setAttribute("data-page-title", story.title);
                    cusdisThread.setAttribute("data-page-url", window.location.href);
                    window.CUSDIS.renderTo(cusdisThread);
                }
            })
            .catch(error => {
                console.error("Fout bij het laden van het verhaal:", error);
                document.getElementById("text-container").innerHTML = "<p>Excuses, het schrijfsel kon niet worden geladen.</p>";
            });
    } else {
        document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
    }
});
