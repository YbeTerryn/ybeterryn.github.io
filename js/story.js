window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("id");

    const allStories = [
        ...(typeof stories !== 'undefined' ? stories : []), 
        ...(typeof archiveStories !== 'undefined' ? archiveStories : [])
    ];
    
    const story = allStories.find(s => s.id === storyId);

    if (story) {
        fetch(story.text)
            .then(res => res.text())
            .then(htmlContent => {
                const textContainer = document.getElementById("text-container");
                const titleElement = document.getElementById("story-title");

                if (titleElement) titleElement.innerText = story.title;

                if (textContainer) {
                    let formattedContent = htmlContent;
                    if (!htmlContent.includes('<p>') && !htmlContent.includes('<br>')) {
                        formattedContent = htmlContent
                            .split('\n')
                            .filter(line => line.trim() !== '')
                            .map(line => `<p>${line}</p>`)
                            .join('');
                    }
                    textContainer.innerHTML = formattedContent;
                    textContainer.style.fontSize = "1.15rem"; 
                    textContainer.style.lineHeight = "1.7";
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
                    
                    // Definieer de functie om de knop te activeren
                    const activateLyket = () => {
                        if (window.lyket) {
                            window.lyket.reinit();
                            console.log("Lyket succesvol geïnitialiseerd voor: " + story.id);
                        }
                    };

                    // Probeer het meteen...
                    activateLyket();

                    // ...en probeer het nog een keer na 1 seconde voor trage verbindingen
                    setTimeout(activateLyket, 1000);
                }

                // Initialiseer Cusdis
                const cusdisThread = document.getElementById("cusdis_thread");
                if (cusdisThread && window.CUSDIS) {
                    cusdisThread.setAttribute("data-page-id", story.id);
                    cusdisThread.setAttribute("data-page-title", story.title);
                    window.CUSDIS.renderTo(cusdisThread);
                }
            })
            .catch(err => console.error("Fout bij het laden van het verhaal:", err));
    }
});
