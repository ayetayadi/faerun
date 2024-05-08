// script2.js
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
    // Mettre à jour le nombre de carreaux du plateau
    const board = document.getElementById('board');
    board.innerHTML = ''; // Réinitialiser le contenu du plateau
    for (let i = 0; i < carreaux; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        board.appendChild(tile);
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
