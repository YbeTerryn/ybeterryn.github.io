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
    // We maken een directe link naar de Lyket-server voor dit verhaal
    // De 'updown' is voor de pijltjes, 'reddit' is de stijl
    const lyketUrl = `https://lyket.dev/api/widget/updown/schrijfsels/${story.id}?apiKey=pt_f4710b1a96a37346a7b9faedf0c733&template=reddit`;
    
    likeContainer.innerHTML = `
        <iframe 
            src="${lyketUrl}" 
            style="width: 100%; height: 80px; border: none; overflow: hidden; display: block; margin: 0 auto;"
            scrolling="no"
        ></iframe>
    `;
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
