<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ybeterryn.be | Verhaal</title>
    <style>
        body {
            background-color: #0d0d0d;
            color: #f2f2f2;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        .container {
            max-width: 800px;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
        }
        #story-title {
            font-size: 36px;
            color: #ffd166;
            margin-bottom: 5px;
            text-align: center;
        }
        #story-meta {
            text-align: center;
            color: #aaa;
            font-size: 16px;
            margin-bottom: 25px;
            font-style: italic;
        }
        #story-image {
            width: 100%;
            max-height: 450px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 30px;
            display: block;
        }
        #text-container {
            font-size: 18px;
            line-height: 1.8;
            color: #e0e0e0;
        }
        #text-container p {
            margin-bottom: 20px;
        }
        .suggestion-card {
            text-decoration: none; 
            color: inherit; 
            width: 280px; 
            background: #1a1a1a; 
            padding: 15px; 
            border-radius: 8px; 
            border: 1px solid #ffd166; 
            transition: transform 0.2s, background 0.2s, border-color 0.2s; 
            text-align: left; 
            display: block; 
            box-sizing: border-box;
        }
        .suggestion-card:hover {
            transform: translateY(-5px);
            border-color: #fff !important;
            background: #252525 !important;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1 id="story-title">Verhaal laden...</h1>
        <div id="story-meta"></div>
        <img id="story-image" src="" alt="" style="display: none;">
        <div id="text-container"></div>
        <div id="like-container"></div>
        <div id="suggestions-container"></div>
    </div>

    <!-- LAAD HIER DE DATA IN UIT JOUW SPECIFIEKE MAP -->
    <script src="data/stories.js"></script>

    <!-- FOUTENVANGER: Geeft direct een pop-up als er iets crasht op GitHub -->
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            console.error("GLOBALE FOUT DETECTIE:", message, "in", source, "op regel:", lineno);
            alert("Er ging iets mis in het script: \n" + message); 
            return false;
        };
        console.log("Systeemcontrole: Basis HTML script start succesvol.");
    </script>

    <!-- FIREBASE EN DETAIL-LOGICA -->
    <script type="module">
        console.log("Systeemcontrole: Javascript MODULE start...");

        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getFirestore, doc, getDoc, updateDoc, increment, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

        // --- PLAK HIERONDER JOUW EIGEN FIREBASE CONFIG ---
        const firebaseConfig = {
            apiKey: "JOUW_API_KEY",
            authDomain: "jouw-project.firebaseapp.com",
            projectId: "jouw-project",
            storageBucket: "jouw-project.appspot.com",
            messagingSenderId: "123456789",
            appId: "1:123456789:web:abc123"
        };
        // ------------------------------------------------

        try {
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
            console.log("Firebase succesvol geïnitialiseerd.");

            const slugify = (text) =>
                text
                    ?.toLowerCase()
                    .replace(/[’']/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-|-$/g, '');

            window.addEventListener('load', () => {
                const params = new URLSearchParams(window.location.search);
                const storyId = params.get("id");

                console.log("URL parameter 'id' ontvangen:", storyId);

                const allStories = [
                    ...(typeof stories !== 'undefined' ? stories : []), 
                    ...(typeof archiveStories !== 'undefined' ? archiveStories : []),
                    ...(typeof reviewStories !== 'undefined' ? reviewStories : [])
                ];

                console.log("Totaal aantal items ingeladen uit data/stories.js:", allStories.length);
                
                if (allStories.length === 0) {
                    console.error("CRITISCH: Geen data gevonden! Staat 'stories.js' in de 'data' map?");
                    document.getElementById("story-title").innerText = "Data kon niet worden geladen";
                    return;
                }

                const story = allStories.find(s => 
                    (s.id && s.id === storyId) || 
                    (s.title && slugify(s.title) === storyId)
                );

                console.log("Gevonden match in database:", story);

                if (story) {
                    const firebaseDocId = story.id || slugify(story.title);
                    const textPath = story.text || `reviews/${slugify(story.title)}.html`;
                    console.log("Proberen tekst op te halen via pad:", textPath);

                    fetch(textPath)
                        .then(res => {
                            if (!res.ok) throw new Error("Bestand niet gevonden op pad: " + textPath);
                            return res.text();
                        })
                        .then(htmlContent => {
                            const textContainer = document.getElementById("text-container");
                            const titleElement = document.getElementById("story-title");
                            const metaElement = document.getElementById("story-meta");
                            const imageElement = document.getElementById("story-image");

                            if (titleElement) {
                                titleElement.innerText = story.title;
                                document.title = `${story.title} | ybeterryn.be`;
                            }

                            if (metaElement) {
                                if (story.director && story.year) {
                                    metaElement.innerText = `Geregisseerd door ${story.director} (${story.year}) — Rating: ${story.rating || 'N/A'}/5`;
                                } else if (story.date) {
                                    metaElement.innerText = story.date;
                                }
                            }

                            if (imageElement && story.image) {
                                imageElement.src = story.image;
                                imageElement.alt = story.title;
                                imageElement.style.display = "block";
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

                            // Like-knop
                            const likeContainer = document.getElementById('like-container');
                            if (likeContainer) {
                                likeContainer.style.textAlign = "center";
                                likeContainer.style.margin = "40px 0 20px 0";
                                
                                likeContainer.innerHTML = `
                                    <div id="firebase-like-section">
                                        <button id="like-button" style="background:none; border:none; cursor:pointer; font-size: 50px; transition: transform 0.2s; padding:0; outline: none;">
                                            ❤️
                                        </button>
                                        <div id="like-count" style="color: #ffd166; font-size: 22px; font-weight: bold; margin-top: 5px;">...</div>
                                    </div>
                                `;

                                const likeButton = document.getElementById('like-button');
                                const likeCountElem = document.getElementById('like-count');
                                const docRef = doc(db, "likes", firebaseDocId);

                                getDoc(docRef).then((docSnap) => {
                                    if (docSnap.exists()) {
                                        likeCountElem.innerText = docSnap.data().count;
                                    } else {
                                        likeCountElem.innerText = "0";
                                        setDoc(docRef, { count: 0 });
                                    }
                                }).catch(err => {
                                    console.warn("Firebase laad-fout:", err);
                                    likeCountElem.innerText = "0";
                                });

                                likeButton.addEventListener('click', () => {
                                    likeButton.style.transform = "scale(1.3)";
                                    setTimeout(() => { likeButton.style.transform = "scale(1)"; }, 200);

                                    updateDoc(docRef, { count: increment(1) }).then(() => {
                                        const currentLikes = parseInt(likeCountElem.innerText) || 0;
                                        likeCountElem.innerText = currentLikes + 1;
                                    });
                                });
                            }

                            // Twee suggesties genereren
                            const suggestionsContainer = document.getElementById('suggestions-container');
                            if (suggestionsContainer) {
                                const otherStories = allStories.filter(s => s.title !== story.title);

                                if (otherStories.length > 0) {
                                    const shuffled = otherStories.sort(() => 0.5 - Math.random());
                                    const selectedStories = shuffled.slice(0, 2);

                                    let suggestionsHTML = `
                                        <div style="text-align:center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #333;">
                                            <h3 style="font-size: 24px; margin-bottom: 25px; color: #fff;">Zin in nog een verhaal of review?</h3>
                                            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                                    `;

                                    selectedStories.forEach(suggestion => {
                                        const targetId = suggestion.id || slugify(suggestion.title);
                                        const storyUrl = `${window.location.pathname}?id=${targetId}`;
                                        
                                        suggestionsHTML += `
                                            <a href="${storyUrl}" class="suggestion-card">
                                                ${suggestion.image ? `<img src="${suggestion.image}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px; margin-bottom: 10px; display:block;">` : ''}
                                                <h4 style="margin: 0 0 8px 0; font-size: 18px; color: #ffd166; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${suggestion.title}</h4>
                                                <p style="margin: 0; font-size: 14px; color: #ccc;">Klik hier om te lezen &rarr;</p>
                                            </a>
                                        `;
                                    });

                                    suggestionsHTML += `</div></div>`;
                                    suggestionsContainer.innerHTML = suggestionsHTML;
                                }
                            }

                        })
                        .catch(err => {
                            console.error("Fetch-fout:", err);
                            document.getElementById("text-container").innerHTML = `<p style='text-align:center; color: #ff6b6b;'>Tekst kon niet worden geladen.<br><small>${err.message}</small></p>`;
                        });
                } else {
                    console.warn("Geen match gevonden voor:", storyId);
                    document.getElementById("story-title").innerText = "Niet gevonden";
                    document.getElementById("text-container").innerHTML = "<p style='text-align:center;'>Niet gevonden in het archief.</p>";
                }
            });
        } catch (e) {
            console.error("Fout binnen module:", e);
        }
    </script>
</body>
</html>
