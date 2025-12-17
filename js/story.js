const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 1. Zoek in beide lijsten (Raamvertelling en Archief)
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 2. Haal de tekst op uit de map 'texts'
    fetch(story.text)
        .then(res => {
            if (!res.ok) throw new Error('Bestand niet gevonden op GitHub');
            return res.text();
        })
        .then(html => {
            // Vul de tekst
            document.getElementById("text-container").innerHTML = html;
            
            // 3. Vul de titel in
            if(document.getElementById("story-title")) {
                document.getElementById("story-title").innerText = story.title;
            }

            // 4. Vul de afbeelding in
            const imgElement = document.getElementById("story-image");
            if(imgElement) {
                imgElement.src = story.image;
                imgElement.alt = story.title;
                imgElement.style.display = "block"; 
            }

            // ===== NIEUW: LYKET LIKES LADEN =====
            const likeContainer = document.getElementById("like-container");
            if (likeContainer) {
                // Koppel het unieke ID van het verhaal aan de like-knop
                likeContainer.setAttribute("data-lyket-id", story.id);
                
                // Als Lyket al in de browser geladen is, heractiveer de knop voor dit nieuwe verhaal
                if (window.lyket) {
                    window.lyket.reinit();
                }
            }
            // ====================================

            // 5. Cusdis reacties laden
            const thread = document.getElementById("cusdis_thread");
            if (thread && window.CUSDIS) {
                thread.setAttribute("data-page-id", story.id);
                thread.setAttribute("data-page-title", story.title);
                thread.setAttribute("data-page-url", window.location.href);
                window.CUSDIS.renderTo(thread);
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("text-container").innerHTML = 
                `<p>Fout: Kan het bestand niet laden. Check GitHub!</p>`;
        });
}
