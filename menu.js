
//menu.js
document.addEventListener("DOMContentLoaded", function() {
    const startGameBtn = document.getElementById('startGame');
  
    startGameBtn.addEventListener('click', function() {
      const carreaux = parseInt(document.getElementById('carreaux').value);
      const chateauAColor = document.getElementById('chateauA').value;
      const chateauBColor = document.getElementById('chateauB').value;
  
      if (chateauAColor === chateauBColor) {
        alert("Veuillez choisir des couleurs différentes pour les deux châteaux.");
        return; // Arrête la fonction si les couleurs sont identiques
      }
  
      // Passer aux étapes suivantes du jeu ou enregistrer les choix
      // Ici, nous imprimons juste les valeurs choisies pour l'exemple
      console.log("Nombre de Carreaux :", carreaux);
      console.log("Couleur du Château A :", chateauAColor);
      console.log("Couleur du Château B :", chateauBColor);
  
      // Rediriger l'utilisateur vers la page de jeu (page2.html)
      window.location.href = "jeu.html?carreaux=" + carreaux + "&chateauA=" + chateauAColor + "&chateauB=" + chateauBColor;

      
    });
});
