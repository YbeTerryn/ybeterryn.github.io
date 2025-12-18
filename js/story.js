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
                    // --- AUTOMATISCHE OPMAAK START ---
                    let formattedContent = htmlContent;
                    
                    // Controleer of de tekst HTML-tags mist. Zo ja: zet enters om naar paragrafen.
                    if (!htmlContent.includes('<p>') && !htmlContent.includes('<br>')) {
                        formattedContent = htmlContent
                            .split('\n')
                            .filter(line => line.trim() !== '')
                            .map(line => `<p>${line}</p>`)
                            .join('');
                    }

                    // Vul de container
                    textContainer.innerHTML = formattedContent;

                    // Zet hier de lettergrootte vast voor alle verhalen
                    textContainer.style.fontSize = "1.15rem"; 
                    textContainer.style.lineHeight = "1.7";
                    // --- AUTOMATISCHE OPMAAK EIND ---
                }

                // Injecteer de Lyket knop
                const container = document.getElementById("like-container");
                if (container) {
                    container.innerHTML = `<div 
                        data-lyket-type="updown" 
                        data-lyket-id="${story.id}" 
                        data-lyket-namespace="verhalen"
                        data-lyket-color-primary="#ffd166"
                    ></div>`;
                    
                    if (window.lyket) {
                        window.lyket.reinit();
                    }
                }

                // Initialiseer Cusdis reacties
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
