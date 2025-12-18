window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("id");

    // Zoek het verhaal in beide mogelijke lijsten
    const allStories = [
        ...(typeof stories !== 'undefined' ? stories : []), 
        ...(typeof archiveStories !== 'undefined' ? archiveStories : [])
    ];
    
    const story = allStories.find(s => s.id === storyId);

    if (story) {
        fetch(story.text)
            .then(res => res.text())
            .then(htmlContent => {
                // Vul de pagina met content
                document.getElementById("text-container").innerHTML = htmlContent;
                document.getElementById("story-title").innerText = story.title;

                // Injecteer de Lyket knop
                const container = document.getElementById("like-container");
                if (container) {
                    container.innerHTML = `<div 
                        data-lyket-type="updown" 
                        data-lyket-id="${story.id}" 
                        data-lyket-namespace="verhalen"
                        data-lyket-color-primary="#ffd166"
                    ></div>`;
                    
                    // Initialiseer Lyket opnieuw voor de nieuwe elementen
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
