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

                if (titleElement) {
                    titleElement.innerText = story.title;
                    document.title = `${story.title} | Ybe Terryn - Offers voor Sesjat`;
                }

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
                }

              const likeContainer = document.getElementById('like-container');
if (likeContainer) {
    // We maken de HTML voor de Lyket-knop aan
    likeContainer.innerHTML = `
        <div 
          data-lyket-type="updown" 
          data-lyket-id="${story.id}" 
          data-lyket-namespace="schrijfsels"
          style="display: flex; justify-content: center;"
        ></div>
    `;

    // DIT IS DE CRUCIALE STAP:
    // Omdat de pagina niet ververst, moeten we Lyket handmatig herstarten
    if (window.lyket) {
        window.lyket.reinit();
    }
}

                // --- CUSDIS INITIALISEREN ---
                const cusdisThread = document.getElementById("cusdis_thread");
                if (cusdisThread && window.CUSDIS) {
                    cusdisThread.innerHTML = ''; 
                    cusdisThread.setAttribute("data-page-id", story.id);
                    cusdisThread.setAttribute("data-page-title", story.title);
                    cusdisThread.setAttribute("data-lang", "nl");
                    cusdisThread.setAttribute("data-theme", "dark");
                    window.CUSDIS.renderTo(cusdisThread);
                }
            }) // <--- Dit haakje ontbrak
            .catch(err => console.error("Fout bij het laden van het verhaal:", err));
    }
});
