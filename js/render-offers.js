const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Zoek in beide lijsten
let story = stories.find(s => s.id === id) || archiveStories.find(s => s.id === id);

if (!story) {
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // 1. Vul de titel in
    if(document.getElementById("story-title")) {
        document.getElementById("story-title").innerText = story.title;
    }

    // 2. Vul de afbeelding in (DIT WAS JE VRAAG)
    const imgElement = document.getElementById("story-image");
    if(imgElement) {
        imgElement.src = story.image;
        imgElement.alt = story.title;
    }
    
    // 3. Haal de tekst op
    fetch(story.text)
        .then(res => {
            if (!res.ok) throw new Error('404');
            return res.text();
        })
        .then(html => {
            document.getElementById("text-container").innerHTML = html;

            // 4. Cusdis reacties laden
            const thread = document.getElementById("cusdis_thread");
            if (thread && window.CUSDIS) {
                thread.setAttribute("data-page-id", story.id);
                thread.setAttribute("data-page-title", story.title);
                thread.setAttribute("data-page-url", window.location.href);
                window.CUSDIS.renderTo(thread);
            }
        })
        .catch(err => {
            document.getElementById("text-container").innerHTML = 
                "<p>Fout bij laden: Check of " + story.text + " bestaat op GitHub.</p>";
        });
}
