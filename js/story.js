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

    // 3. LikeBtn Integratie (Verfijnde Look)
const likeContainer = document.getElementById('like-container');
if (likeContainer) {
    // We centreren de container eerst
    likeContainer.style.textAlign = "center";
    likeContainer.style.margin = "30px 0";

    likeContainer.innerHTML = `
        <span class="likebtn-wrapper" 
            data-identifier="${story.id}" 
            data-theme="custom" 
            data-btn_size="32"
            data-f_size="16"
            data-icon_l="heart"
            data-icon_l_c="#ffd166" 
            data-icon_l_c_v="#ffd166"
            data-label_c="#ffd166"
            data-label_c_v="#ffd166"
            data-counter_l_c="#ffd166"
            data-bg_c="transparent"
            data-brdr_c="transparent"
            data-ef_voting="bounce"
            data-show_like_label="false"
            data-dislike_enabled="false"
            data-lang="nl">
        </span>
    `;

    // Herinitialiseer de knop
    if (typeof LikeBtn !== 'undefined') {
        LikeBtn.init();
    }
}
