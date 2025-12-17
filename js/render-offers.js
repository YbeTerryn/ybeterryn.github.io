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
// ... (bovenkant van je script blijft hetzelfde)

} else {
    // Als hij wel gevonden is, laad dan de tekst:
    fetch(story.text)
        .then(res => res.text())
        .then(html => {
            document.getElementById("text-container").innerHTML = html;
            
            // 1. Vul de titel in
            if(document.getElementById("story-title")) {
                document.getElementById("story-title").innerText = story.title;
            }

            // 2. VOEG DIT TOE: Vul de afbeelding in
            if(document.getElementById("story-image")) {
                const imgElement = document.getElementById("story-image");
                imgElement.src = story.image; // Pakt "Draft/Sesjat.jpg" uit je lijst
                imgElement.alt = story.title;
            }
        })
// ... (rest van je script)
