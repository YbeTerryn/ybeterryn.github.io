document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        document.getElementById("text-container").innerHTML = "<p>Geen ID gevonden in de URL.</p>";
        return;
    }

    // 1. Verzamel alle data die op dit moment in het geheugen zit
    let allData = [];
    
    if (typeof stories !== 'undefined') {
        allData = allData.concat(stories);
    }
    if (typeof archiveStories !== 'undefined') {
        allData = allData.concat(archiveStories);
    }
    if (typeof reviewStories !== 'undefined') {
        allData = allData.concat(reviewStories);
    }

    // 2. Zoek het verhaal
    const story = allData.find(s => s.id === id);

    if (!story) {
        // Als het niet gevonden wordt, toon dan wat we wél hebben voor debugging
        console.log("Gezocht ID:", id);
        console.log("Beschikbare data:", allData);
        document.getElementById("text-container").innerHTML = `
            <p>Schrijfsel niet gevonden.</p>
            <p style="font-size: 0.8rem; color: gray;">Gezocht naar ID: ${id}</p>
        `;
        return;
    }

    // 3. Vul de pagina elementen
    const titleEl = document.getElementById("story-title");
    const imageEl = document.getElementById("story-image");
    const textContainer = document.getElementById("text-container");

    if (titleEl) titleEl.innerText = story.title;
    if (imageEl) {
        imageEl.src = story.image;
        imageEl.alt = story.title;
    }

    // 4. Haal de tekst op
    if (story.text) {
        fetch(story.text)
            .then(response => {
                if (!response.ok) throw new Error("Bestand kon niet worden opgehaald (404)");
                return response.text();
            })
            .then(html => {
                textContainer.innerHTML = html;
                
                // Optioneel: Cusdis herladen
                if (window.CUSDIS) {
                    window.CUSDIS.renderTo(document.getElementById("cusdis_thread"));
                }
            })
            .catch(error => {
                textContainer.innerHTML = `<p>Fout bij laden: ${error.message}</p>`;
            });
    }
});
