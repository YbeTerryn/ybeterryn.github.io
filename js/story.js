const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Zoek in beide lijsten (Raamvertelling en Archief)
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 1. Vul de titel in
    const titleElement = document.getElementById("story-title");
    if (titleElement) {
        titleElement.innerText = story.title;
    }

    // 2. Vul de afbeelding in (Zodat deze rechts verschijnt)
    const imgElement = document.getElementById("story-image");
    if (imgElement) {
        imgElement.src = story.image;
        imgElement.alt = story.title;
        imgElement.style.display = "block"; // Zorg dat hij zichtbaar is
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
