<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ybeterryn.be | Verhaal</title>
    <style>
        /* Basis styling voor de pagina */
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
        <h1 id="story-title">Verhaal laden...</h1>
        
        <img id="story-image" src="" alt="" style="display: none;">
        
        <div id="text-container"></div>
        
        <div id="like-container"></div>
        
        <div id="suggestions-container"></div>
    </div>

    <script src="stories.js"></script>
    <script src="archiveStories.js"></script>
    <script src="reviewStories.js"></script>

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

            // Verzamel alle verhalen uit je ingeladen arrays
            const allStories = [
                ...(typeof stories !== 'undefined' ? stories : []), 
                ...(typeof archiveStories !== 'undefined' ? archiveStories : []),
                ...(typeof reviewStories !== 'undefined' ? reviewStories : [])
            ];
            
            const slugify = (text) =>
                text
                    ?.toLowerCase()
                    .replace(/[’']/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-|-$/g, '');

            console.log("Gezocht storyId uit URL =", storyId);
            console.log("Totaal aantal ingeladen verhalen =", allStories.length);

            const story = allStories.find(s =>
                s.id === storyId ||
                slugify(s.title) === storyId
            );

            console.log("Gevonden match =", story);

            if (story) {
                const slug = slugify(story.title);

                const textPath = story.text || `reviews/${slug}.html`;
                const imagePath = story.image || `Draft/${slug}.jpg`;

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
                        if (imageElement) {
                            imageElement.src = imagePath;
                            imageElement.alt = story.title;
                            imageElement.style.display = "block";
                        }

                        // 2. Tekst formatteren
                        if (textContainer) {
                            let formattedContent = htmlContent;
                            if (!htmlContent.includes('<p>') && !htmlContent.
