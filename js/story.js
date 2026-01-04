window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("id");

    // Zoek in ALLE drie de lijsten
    const allStories = [
        ...(typeof stories !== 'undefined' ? stories : []), 
        ...(typeof archiveStories !== 'undefined' ? archiveStories : []),
        ...(typeof reviewStories !== 'undefined' ? reviewStories : [])
    ];
    
    const story = allStories.find(s => s.id === storyId);

    if (story) {
        fetch(story.text)
            .then(res => {
                if (!res.ok) throw new Error("Bestand niet gevonden");
                return res.text();
            })
            .then(htmlContent => {
                const textContainer = document.getElementById("text-container");
                const titleElement = document.getElementById("story-title");
                const imageElement = document.getElementById("story-image");

                // 1. Titel en Afbeelding instellen
                if (titleElement) {
                    titleElement.innerText = story.title;
                    document.title = `${story.title} | Pieter Paul Tybbe`;
                }
                if (imageElement && story.image) {
                    imageElement.src = story.image;
                    imageElement.alt = story.title;
                }

                // 2. Tekst formatteren (behandelt zowel kale tekst als HTML)
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

                // 3. Like-knop herstellen
                const likeContainer = document.getElementById('like-container');
                if (likeContainer) {
                    likeContainer.style.textAlign = "center";
                    likeContainer.style.margin = "40px 0";
                    likeContainer.innerHTML = `
                        <span class="likebtn-wrapper" 
                            data-theme="custom" 
                            data-site_id="694569886fd08bbc6273e42b" 
                            data-identifier="${story.id}" 
                            data-btn_size="56" 
                            data-f_size="20"
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

                    // Belangrijk: De LikeBtn widget herladen
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
            .catch(err => {
                console.error("Fout bij laden:", err);
                document.getElementById("text-container").innerHTML = "<p>Kon het verhaal niet laden.</p>";
            });
    } else {
        document.getElementById("text-container").innerHTML = "<p>Schrijfsel niet gevonden.</p>";
    }
});
