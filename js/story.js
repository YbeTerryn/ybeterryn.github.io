const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 1. Zoek het verhaal in de data
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 2. Haal de tekst op van GitHub/Server
    fetch(story.text)
        .then(res => {
            if (!res.ok) throw new Error('Bestand niet gevonden');
            return res.text();
        })
        .then(html => {
            // Vul de tekst in de pagina
            document.getElementById("text-container").innerHTML = html;
            
            // 3. Vul de titel in
            if(document.getElementById("story-title")) {
                document.getElementById("story-title").innerText = story.title;
            }

            // 4. Vul de afbeelding in (indien aanwezig)
            const imgElement = document.getElementById("story-image");
            if(imgElement) {
                imgElement.src = story.image;
                imgElement.alt = story.title;
                imgElement.style.display = "block"; 
            }

            // 5. LIKES INJECTEREN EN ACTIVEREN
            const likeContainer = document.getElementById("like-container");
            if (likeContainer) {
                // We bouwen de HTML knop hier pas op, met het juiste verhaal-ID
                likeContainer.innerHTML = `
                    <div 
                        data-lyket-type="updown" 
                        data-lyket-id="${story.id}" 
                        data-lyket-namespace="verhalen"
                        data-lyket-color-primary="#ffd166"
                    ></div>
                `;
                
                // Vertel Lyket dat er een nieuwe knop is om te laden
                if (window.lyket) {
                    window.lyket.reinit();
                }
            }

            // 6. Cusdis reacties laden
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
                `<p>Fout bij laden: ${err.message}</p>`;
        });
}
