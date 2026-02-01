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

                    // 3. Firebase Like-knop (Vervangt LikeBtn)
                    const likeContainer = document.getElementById('like-container');
                    if (likeContainer) {
                        likeContainer.style.textAlign = "center";
                        likeContainer.style.margin = "40px 0";
                        
                        // HTML voor de knop
                        likeContainer.innerHTML = `
                            <div id="firebase-like-section" style="font-family: inherit;">
                                <button id="like-button" style="background:none; border:none; cursor:pointer; font-size: 50px; transition: transform 0.2s; padding:0;">
                                    ❤️
                                </button>
                                <div id="like-count" style="color: #ffd166; font-size: 22px; font-weight: bold; margin-top: 5px;">...</div>
                            </div>
                        `;

                        const likeButton = document.getElementById('like-button');
                        const likeCountElem = document.getElementById('like-count');
                        const docRef = doc(db, "likes", story.id);

                        // Haal huidige likes op
                        getDoc(docRef).then((docSnap) => {
                            if (docSnap.exists()) {
                                likeCountElem.innerText = docSnap.data().count;
                            } else {
                                likeCountElem.innerText = "0";
                                setDoc(docRef, { count: 0 });
                            }
                        });

                        // Like
