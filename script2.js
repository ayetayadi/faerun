// script2.js

// Récupérer les éléments HTML des châteaux A et B ainsi que de leurs consoles
const castleAElement = document.getElementById("castleA");
const castleBElement = document.getElementById("castleB");
const consoleAElement = document.getElementById("consoleA");
const consoleBElement = document.getElementById("consoleB");

// Définir les objets représentant les châteaux A et B
const castleA = {
    resources: 3,
    consoleElement: consoleAElement,
    trainingQueue: []
};

const castleB = {
    resources: 3,
    consoleElement: consoleBElement,
    trainingQueue: []
};


document.addEventListener("DOMContentLoaded", function() {
    // Gestionnaire de clic pour terminer le tour
    document.getElementById('Turn').addEventListener('click', function() {
        // Implémentez ici la logique pour terminer le tour
    });

    // Gestionnaires de clic pour ajouter des unités au château A
    document.getElementById('addNainA').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Nain au château A
    });
    document.getElementById('addChefNainA').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Chef Nain au château A
    });
    document.getElementById('addElfeA').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Elfe au château A
    });
    document.getElementById('addChefElfeA').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Chef Elfe au château A
    });

    // Gestionnaires de clic pour ajouter des unités au château B
    document.getElementById('addNainB').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Nain au château B
    });
    document.getElementById('addChefNainB').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Chef Nain au château B
    });
    document.getElementById('addElfeB').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Elfe au château B
    });
    document.getElementById('addChefElfeB').addEventListener('click', function() {
        // Implémentez ici la logique pour ajouter un Chef Elfe au château B
    });

     // Récupérer les paramètres d'URL
    const params = new URLSearchParams(window.location.search);
    const carreaux = parseInt(params.get('carreaux'));

    // Mettre à jour le nombre de carreaux affiché dans le HTML
    document.getElementById('nbCarreaux').textContent = carreaux;

    // Générer les carreaux dynamiquement
    for (let i = 1; i <= carreaux; i++) {
        // Créer un nouveau div pour chaque carreau
        const carreauDiv = document.createElement('div');
        carreauDiv.classList.add('inputConsole');
        carreauxContainer.appendChild(carreauDiv);
    }


    const chateauAColor = params.get('chateauA');
    const chateauBColor = params.get('chateauB');

    // Mettre à jour la couleur du château A
    if (chateauAColor === "red") {
        document.getElementById('castleATitle').style.color = "red";
    } else {
        document.getElementById('castleATitle').style.color = "blue";
    }

    // Mettre à jour la couleur du château B
    if (chateauBColor === "red") {
        document.getElementById('castleBTitle').style.color = "red";
    } else {
        document.getElementById('castleBTitle').style.color = "blue";
    }


    const turnBtn = document.getElementById('Turn');
    const turnCount = document.getElementById('turnCounter'); // Correction de l'ID
    let currentTurn = 0;
  
    turnBtn.addEventListener('click', function() {
        currentTurn++;
        turnCount.textContent = currentTurn;
    });

});
