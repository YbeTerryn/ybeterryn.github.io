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

       // 3. LikeBtn Integratie (Verbeterde versie)
const likeContainer = document.getElementById('like-container');
if (likeContainer) {
    likeContainer.style.textAlign = "center";
    likeContainer.style.margin = "40px 0";

 // 3. LikeBtn Integratie (Basisversie)
const likeContainer = document.getElementById('like-container');
if (likeContainer) {
    likeContainer.style.textAlign = "center";
    likeContainer.style.margin = "40px 0";

    // Alleen de noodzakelijke data, de rest doen we in het dashboard
    likeContainer.innerHTML = `
        <span class="likebtn-wrapper" 
            data-identifier="${story.id}" 
            data-lang="nl"
            data-theme="dark">
        </span>
    `;

    if (typeof LikeBtn !== 'undefined') {
        LikeBtn.init();
    }
}
    // We wachten heel even (100ms) tot de HTML echt 'geland' is
    setTimeout(() => {
        if (typeof LikeBtn !== 'undefined') {
            LikeBtn.init();
        }
    }, 100);
}

                // 4. Cusdis initialiseren (Reacties)
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
