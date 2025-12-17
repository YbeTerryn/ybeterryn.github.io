const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Deze regel zoekt in BEIDE lijsten:
let story = stories.find(s => s.id === id);

if (!story) {
    story = archiveStories.find(s => s.id === id);
}

if (!story) {
    // Als hij in geen van beide lijsten staat:
    document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
} else {
    // Als hij wel gevonden is, laad dan de tekst:
    fetch(story.text)
        .then(res => res.text())
        .then(html => {
            document.getElementById("text-container").innerHTML = html;
            
            // Vergeet de titels en afbeeldingen niet in te vullen als je die layout gebruikt!
            if(document.getElementById("story-title")) {
                document.getElementById("story-title").innerText = story.title;
            }
        })
        .catch(err => {
            document.getElementById("text-container").innerHTML = "<p>Bestand kon niet worden geladen. Check de bestandsnaam!</p>";
        });
}
