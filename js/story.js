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

     // Zoek dit gedeelte in je story.js en vervang het:
const likeContainer = document.getElementById('like-container');
if (likeContainer) {
    likeContainer.innerHTML = `
        <span class="likebtn-wrapper" 
            data-identifier="${story.id}" 
            data-theme="dark" 
            data-lang="nl" 
            data-ef_voting="grow" 
            data-show_like_label="false"
            data-dislike_enabled="false"
            data-icon_l_c_v="#ffd166">
        </span>
    `;

    // Activeer de knop handmatig nadat de HTML is geplaatst
    if (typeof LikeBtn !== 'undefined') {
        LikeBtn.init();
    }
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
