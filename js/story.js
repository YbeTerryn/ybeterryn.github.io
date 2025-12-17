const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 1. Zoek het verhaal in beide lijsten
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 2. Haal de HTML tekst op uit de map 'texts'
    fetch(story.text)
        .then(res => {
            if (!res.ok) throw new Error('Bestand niet gevonden op GitHub');
            return res.text();
        })
        .then(html => {
            // Vul de tekstcontainer
            document.getElementById("text-container").innerHTML = html;
            
            // 3. Vul de titel in
            if(document.getElementById("story-title")) {
                document.getElementById("story-title").innerText = story.title;
            }

            // 4. Vul de afbeelding in (Cruciaal!)
            const imgElement = document.getElementById("story-image");
            if(imgElement) {
                imgElement.src = story.image;
                imgElement.alt = story.title;
                imgElement.style.display = "block"; // Zorg dat de afbeelding zichtbaar wordt
            }

            // 5. Cusdis reacties metadata instellen
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
                `<p>Fout: Kan het tekstbestand niet laden (${story.text}). Check de bestandsnaam en hoofdletters op GitHub!</p>`;
        });
}
