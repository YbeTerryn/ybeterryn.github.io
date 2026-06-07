<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ybeterryn.be | Verhaal</title>
    <style>
        /* Basis styling voor de pagina - pas dit gerust aan jouw eigen design aan */
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
            margin-bottom: 20px;
            text-align: center;
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
        
        /* Styling voor de interactieve suggestie-kaarten */
        .suggestion-card:hover {
            transform: translateY(-5px);
            border-color: #fff !important;
            background: #252525 !important;
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Hier wordt de titel ingeladen -->
        <h1 id="story-title">Verhaal laden...</h1>
        
        <!-- Hier wordt de hoofdafbeelding ingeladen -->
        <img id="story-image" src="" alt="" style="display: none;">
        
        <!-- Hier komt de tekst van het kortverhaal of de review -->
        <div id="text-container"></div>
        
        <!-- De interactieve Firebase Like-knop -->
        <div id="like-container"></div>
        
        <!-- NIEUW: De suggestie-knoppen naar andere verhalen -->
        <div id="suggestions-container"></div>
    </div>

    <!-- FIREBASE SCRIPT EN LOGICA -->
    <script type="module">
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

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        window.addEventListener('load', () => {
            const params = new URLSearchParams(window.location.search);
            const storyId = params.get("id");

            // Verzamel alle verhalen uit je arrays
            const allStories = [
                ...(typeof stories !== 'undefined' ? stories : []), 
                ...(typeof archiveStories !== 'undefined' ? archiveStories : []),
                ...(typeof reviewStories !== 'undefined' ? reviewStories : [])
            ];
            
            const story = allStories.find(s => s.id === storyId);

          if (story) {

    const textPath = story.text || `reviews/${story.title
        .toLowerCase()
        .replace(/[’']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')}.html`;

    fetch(textPath)
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
                            imageElement.style.display = "block"; // Maak zichtbaar als er een afbeelding is
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

                        // 3. Firebase Like-knop initialiseren en opbouwen
                        const likeContainer = document.getElementById('like-container');
                        if (likeContainer) {
                            likeContainer.style.textAlign = "center";
                            likeContainer.style.margin = "40px 0 20px 0";
                            
                            likeContainer.innerHTML = `
                                <div id="firebase-like-section" style="font-family: inherit;">
                                    <button id="like-button" style="background:none; border:none; cursor:pointer; font-size: 50px; transition: transform 0.2s; padding:0; outline: none;">
                                        ❤️
                                    </button>
                                    <div id="like-count" style="color: #ffd166; font-size: 22px; font-weight: bold; margin-top: 5px;">...</div>
                                </div>
                            `;

                            const likeButton = document.getElementById('like-button');
                            const likeCountElem = document.getElementById('like-count');
                            const docRef = doc(db, "likes", story.id);

                            // Haal huidige stand van de likes op uit Firestore
                            getDoc(docRef).then((docSnap) => {
                                if (docSnap.exists()) {
                                    likeCountElem.innerText = docSnap.data().count;
                                } else {
                                    likeCountElem.innerText = "0";
                                    setDoc(docRef, { count: 0 });
                                }
                            });

                            // Like-klik actie: Verhoog de teller in de database bij een klik
                            likeButton.addEventListener('click', () => {
                                // Subtiele animatie bij het klikken
                                likeButton.style.transform = "scale(1.3)";
                                setTimeout(() => { likeButton.style.transform = "scale(1)"; }, 200);

                                // Update Firestore en verhoog met 1
                                updateDoc(docRef, {
                                    count: increment(1)
                                }).then(() => {
                                    // Update de teller direct visueel op het scherm
                                    const currentLikes = parseInt(likeCountElem.innerText) || 0;
                                    likeCountElem.innerText = currentLikes + 1;
                                }).catch((error) => {
                                    console.error("Fout bij updaten van likes: ", error);
                                });
                            });
                        }

                        // 4. Suggesties voor andere verhalen genereren
                        const suggestionsContainer = document.getElementById('suggestions-container');
                        if (suggestionsContainer) {
                            // Filter het huidige actieve verhaal eruit zodat deze niet getipt wordt
                            const otherStories = allStories.filter(s => s.id !== story.id);

                            if (otherStories.length > 0) {
                                // Schud de overige verhalen willekeurig door elkaar
                                const shuffled = otherStories.sort(() => 0.5 - Math.random());
                                // Pak de eerste 2 verhalen uit de geschudde lijst
                                const selectedStories = shuffled.slice(0, 2);

                                let suggestionsHTML = `
                                    <div style="text-align:center; margin-top: 50px; padding-top: 30px; border-top: 1px solid #333;">
                                        <h3 style="font-size: 24px; margin-bottom: 25px; color: #fff;">Zin in nog een verhaal?</h3>
                                        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                                `;

                                selectedStories.forEach(suggestion => {
                                    // Blijf op dezelfde pagina/bestandsnaam, maar verander het id in de URL
                                    const storyUrl = `${window.location.pathname}?id=${suggestion.id}`;
                                    
                                    suggestionsHTML += `
                                        <a href="${storyUrl}" class="suggestion-card" style="text-decoration: none; color: inherit; width: 280px; background: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #ffd166; transition: transform 0.2s, background 0.2s, border-color 0.2s; text-align: left; display: block; box-sizing: border-box;">
                                            ${suggestion.image ? `<img src="${suggestion.image}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px; margin-bottom: 10px; display:block;">` : ''}
                                            <h4 style="margin: 0 0 8px 0; font-size: 18px; color: #ffd166; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${suggestion.title}</h4>
                                            <p style="margin: 0; font-size: 14px; color: #ccc;">Klik hier om te lezen &rarr;</p>
                                        </a>
                                    `;
                                });

                                suggestionsHTML += `
                                        </div>
                                    </div>
                                `;
                                suggestionsContainer.innerHTML = suggestionsHTML;
                            }
                        }

                    })
                    .catch(err => {
                        console.error(err);
                        const textContainer = document.getElementById("text-container");
                        if (textContainer) textContainer.innerHTML = "<p style='text-align:center; color: #ff6b6b;'>Er ging iets mis bij het laden van het verhaal.</p>";
                    });
            } else {
                // Als het ID niet bestaat in allStories
                document.getElementById("story-title").innerText = "Verhaal niet gevonden";
                document.getElementById("text-container").innerHTML = "<p style='text-align:center;'>Het gezochte verhaal kon helaas niet worden gevonden in ons archief.</p>";
            }
        });
    </script>
</body>
</html>
