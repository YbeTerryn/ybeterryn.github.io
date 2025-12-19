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

const likeContainer = document.getElementById('like-container');
if (likeContainer) {
    likeContainer.style.textAlign = "center";
    likeContainer.style.margin = "40px 0";

    // Hier gebruiken we jouw unieke Site ID uit het screenshot
    likeContainer.innerHTML = `
        <span class="likebtn-wrapper" 
            data-theme="custom" 
            data-site_id="694569886fd08bbc6273e42b" 
            data-identifier="${story.id}" 
            data-icon_l="hrt6" 
            data-icon_l_c="#ffd166" 
            data-icon_l_c_v="#fbae05"
            data-label_c="#ffd166"
            data-counter_l_c="#ffd166"
            data-bg_c="transparent"
            data-brdr_c="transparent"
            data-show_like_label="false"
            data-dislike_enabled="false"
            data-popup_disabled="true"
            data-lang="nl">
        </span>
    `;

    // Activeer de knop na een korte vertraging
    setTimeout(() => {
        if (typeof LikeBtn !== 'undefined') {
            LikeBtn.init();
        }
    }, 200);
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
