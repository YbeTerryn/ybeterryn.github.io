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
        
        /* Styling voor de interactieve suggestie-kaarten */
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

    <script src="data/stories.js"></script>

    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            console.error("GLOBALE FOUT DETECTIE:", message, "in", source, "op regel:", lineno);
            alert("Er ging iets mis in het script: \n" + message); 
            return false;
        };
        console.log("Systeemcontrole: Basis HTML script start succesvol.");
    </script>

    <script type="module">
        console.log("Systeemcontrole: Javascript MODULE start...");

        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getFirestore, doc, getDoc, updateDoc, increment, setDoc } from "
