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

                // 1. Titel en Document titel instellen
                if (titleElement) {
                    titleElement.innerText = story.title;
                    document.title = `${story.title} | Ybe Terryn - Offers voor Sesjat`;
                }

                // 2. Tekst formatteren en plaatsen
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

                // 3. Lyket Iframe integratie (De Fix voor de 404)
                const likeContainer = document.getElementById('like-container');
                if (likeContainer) {
                    const lyketUrl = `https://lyket.dev/api/widget/updown?apiKey=pt_f4710b1a96a37346a7b9faedf0c733&id=${story.id}&namespace=schrijfsels&template=reddit`;
                    
                    likeContainer.innerHTML = `
                        <iframe 
                            src="${lyketUrl}" 
                            style="width: 100%; height: 80px; border: none; overflow: hidden; display: block; margin: 0 auto; background: transparent;"
                            scrolling="no"
                            title="Lyket Widget">
                        </iframe>
                    `;
                }

                // 4. Cusdis initialiseren
                const cusdisThread = document.getElementById("cusdis_thread");
                if (cusdisThread && window.CUSDIS) {
                    cusdisThread.innerHTML = ''; 
                    cusdisThread.setAttribute("data-page-id", story.id);
                    cusdisThread.setAttribute("data-page-title", story.title);
                    cusdisThread.setAttribute("data-lang", "nl");
                    cusdisThread.setAttribute("data-theme", "dark");
                    window.CUSDIS.renderTo(cusdisThread);
                }
            })
            .catch(err => console.error("Fout bij het laden van het verhaal:", err));
    }
});
