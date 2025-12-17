const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Zoek in beide lijsten (Raamvertelling en Archief)
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 1. Vul de titel en afbeelding in (als de elementen bestaan)
    if(document.getElementById("story-title")) {
        document.getElementById("story-title").innerText = story.title;
    }
    
    // 2. Haal de tekst op
    fetch(story.text)
        .then(res => {
            if (!res.ok) throw new Error('404');
            return res.text();
        })
        .then(html => {
            document.getElementById("text-container").innerHTML = html;

            // 3. Cusdis reacties metadata instellen
            const thread = document.getElementById("cusdis_thread");
            if (thread) {
                thread.setAttribute("data-page-id", story.id);
                thread.setAttribute("data-page-title", story.title);
                thread.setAttribute("data-page-url", window.location.href);

                // Cusdis opnieuw laden
                if (window.CUSDIS) {
                    window.CUSDIS.renderTo(thread);
                }
            }
        })
        .catch(err => {
            document.getElementById("text-container").innerHTML = 
                "<p>Fout: Kan het bestand '" + story.text + "' niet vinden. Controleer hoofdletters!</p>";
        });
}
