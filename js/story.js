window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("id");

    const allStories = [
        ...(typeof stories !== 'undefined' ? stories : []), 
        ...(typeof archiveStories !== 'undefined' ? archiveStories : [])
    ];
    
    const story = allStories.find(s => s.id === storyId);

    if (story) {
        // We halen het tekstbestand op
        fetch(story.text)
            .then(res => res.text())
            .then(htmlContent => {
                const textContainer = document.getElementById("text-container");
                const titleElement = document.getElementById("story-title");

                // Titel aanpassen (voor bezoeker en Google)
                if (titleElement) {
                    titleElement.innerText = story.title;
                    document.title = `${story.title} | Ybe Terryn - Offers voor Sesjat`;
                }

                // De tekst zelf plaatsen
                if (textContainer) {
                    let formattedContent = htmlContent;
                    // Als er geen HTML in de tekst staat, maken we er paragrafen van
                    if (!htmlContent.includes('<p>') && !htmlContent.includes('<br>')) {
                        formattedContent = htmlContent
                            .split('\n')
                            .filter(line => line.trim() !== '')
                            .map(line => `<p>${line}</p>`)
                            .join('');
                    }
                    textContainer.innerHTML = formattedContent;
                }

                // --- LIKES INITIALISEREN ---
                const container = document.getElementById("like-container");
                if (container) {
                    container.innerHTML = `<div 
                        data-lyket-type="updown" 
                        data-lyket-id="${story.id}" 
                        data-lyket-namespace="verhalen"
                        data-lyket-color-primary="#ffd166"
                    ></div>`;
                    
                    const activateLyket = () => {
                        if (window.lyket) {
                            window.lyket.reinit();
                        }
                    };

                    activateLyket();
                    setTimeout(activateLyket, 1000);
                }

              // --- CUSDIS INITIALISEREN ---
const cusdisThread = document.getElementById("cusdis_thread");
if (cusdisThread && window.CUSDIS) {
    cusdisThread.setAttribute("data-page-id", story.id);
    cusdisThread.setAttribute("data-page-title", story.title);
    
    // Voeg deze regels toe voor taal en thema:
    cusdisThread.setAttribute("data-lang", "nl"); // Zet taal op Nederlands
    cusdisThread.setAttribute("data-theme", "dark"); // Forceer donker thema
    
    window.CUSDIS.renderTo(cusdisThread);
}
            .catch(err => console.error("Fout bij het laden van het verhaal:", err));
    }
});
