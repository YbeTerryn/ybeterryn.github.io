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
                document.getElementById("text-container").innerHTML = htmlContent;
                document.getElementById("story-title").innerText = story.title;

                // LIKES INJECTEREN
                const container = document.getElementById("like-container");
                if (container) {
                    container.innerHTML = `<div 
                        data-lyket-type="updown" 
                        data-lyket-id="${story.id}" 
                        data-lyket-namespace="verhalen"
                        data-lyket-color-primary="#ffd166"
                    ></div>`;
                    
                    if (window.lyket) {
                        window.lyket.reinit();
                    }
                }

                // CUSDIS REACTIES
                const cusdisThread = document.getElementById("cusdis_thread");
                if (cusdisThread && window.CUSDIS) {
                    cusdisThread.setAttribute("data-page-id", story.id);
                    cusdisThread.setAttribute("data-page-title", story.title);
                    window.CUSDIS.renderTo(cusdisThread);
                }
            })
            .catch(err => console.error("Fout bij laden:", err));
    }
});
