const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Zoek in beide lijsten (Raamvertelling en Archief)
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 1. Tekst laden
    fetch(story.text)
        .then(res => res.text())
        .then(html => {
            document.getElementById("text-container").innerHTML = html;
            
            // 2. Titel invullen
            if(document.getElementById("story-title")) {
                document.getElementById("story-title").innerText = story.title;
            }

            // 3. AFBEELDING INVULLEN (Cruciaal voor je vraag!)
            const imgElement = document.getElementById("story-image");
            if(imgElement) {
                imgElement.src = story.image; // Pakt "Draft/Sesjat.jpg"
                imgElement.alt = story.title;
                imgElement.style.display = "block"; // Zorgt dat hij niet verborgen blijft
            }
        });
}
    // 3. Haal de HTML tekst op uit de map 'texts'
    fetch(story.text)
        .then(res => {
            if (!res.ok) throw new Error('Bestand niet gevonden');
            return res.text();
        })
        .then(html => {
            document.getElementById("text-container").innerHTML = html;

            // 4. Cusdis reacties metadata instellen
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
                `<p>Fout: Kan het tekstbestand niet laden (${story.text}). Check hoofdletters op GitHub!</p>`;
        });
}
