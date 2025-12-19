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

                // 1. Titel instellen
                if (titleElement) {
                    titleElement.innerText = story.title;
                    document.title = `${story.title} | Pieter Paul Tybbe`;
                }

                // 2. Tekst formatteren
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

                // 3. Virtueel Applaus (De betrouwbare vervanger voor Lyket)
                const likeContainer = document.getElementById('like-container');
                if (likeContainer) {
                    likeContainer.innerHTML = `
                        <div style="margin-top: 20px;">
                            <a href="mailto:ybeterryn@gmail.com?subject=Applaus voor: ${story.title}" 
                               style="text-decoration: none; font-size: 1.2rem; border: 1px solid #ffd166; padding: 12px 24px; border-radius: 5px; color: #ffd166; display: inline-block; font-variant: small-caps;">
                               👏 Geef een virtueel applaus
                            </a>
                        </div>
                    `;
                }

                // 4. Cusdis initialiseren (Nu als hoofd-interactie)
                if (window.CUSDIS) {
                    const cusdisThread = document.getElementById("cusdis_thread");
                    if (cusdisThread) {
                        cusdisThread.setAttribute("data-page-id", story.id);
                        cusdisThread.setAttribute("data-page-title", story.title);
                        window.CUSDIS.renderTo(cusdisThread);
                    }
                }
            })
            .catch(err => console.error("Fout bij laden:", err));
    }
});
