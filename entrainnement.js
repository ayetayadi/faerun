const trainingCosts = {
    "Nain": Nain.prototype.getCost,
    "ChefNain": ChefNain.getCost(),
    "Elfe": Elfe.getCost(),
    "ChefElfe": ChefElfe.getCost()
};

console.log(trainingCosts["Nain"]);

console.log(Nain.prototype.getCost);

// Vous pouvez ensuite appeler cette méthode avec un objet de la classe Nain
const nain = new Nain();
console.log(Nain.getCost());

// Fonction pour gérer l'ajout d'un guerrier à l'entraînement
function addUnitToTraining(unitType, castle) {
    // Vérifier si le château a suffisamment de ressources pour entraîner ce type de guerrier
    if (castle.resources >= trainingCosts[unitType]) {
        // Réduire les ressources du château en fonction du coût d'entraînement
        castle.resources -= trainingCosts[unitType];
        // Ajouter le guerrier à l'entraînement du château
        castle.trainingQueue.push(unitType);
        // Mettre à jour l'affichage de la console du château
        addToConsole(`Entrainement de 1:${unitType} OK (-${trainingCosts[unitType]} ressource)`, castle.consoleElement);
    } else {
        // Afficher un message si le château n'a pas suffisamment de ressources
        addToConsole(`Impossible d'entraîner 1:${unitType} (ressources insuffisantes)`, castle.consoleElement);
    }
}

// Fonction pour ajouter un message à la console du château
function addToConsole(message, consoleElement) {
    // Créer un élément de paragraphe pour le message
    const paragraph = document.createElement("p");
    // Définir le contenu du paragraphe avec le message
    paragraph.textContent = message;
    // Ajouter le paragraphe à la console du château
    consoleElement.appendChild(paragraph);
}

// Récupérer les éléments des boutons d'ajout d'unité et leur ajouter des gestionnaires d'événements
document.getElementById("addNainA").addEventListener("click", function() {
    addUnitToTraining("Nain", castleA);
});

document.getElementById("addChefNainA").addEventListener("click", function() {
    addUnitToTraining("ChefNain", castleA);
});

document.getElementById("addElfeA").addEventListener("click", function() {
    addUnitToTraining("Elfe", castleA);
});

document.getElementById("addChefElfeA").addEventListener("click", function() {
    addUnitToTraining("ChefElfe", castleA);
});

document.getElementById("addNainB").addEventListener("click", function() {
    addUnitToTraining("Nain", castleB);
});

document.getElementById("addChefNainB").addEventListener("click", function() {
    addUnitToTraining("ChefNain", castleB);
});

document.getElementById("addElfeB").addEventListener("click", function() {
    addUnitToTraining("Elfe", castleB);
});

document.getElementById("addChefElfeB").addEventListener("click", function() {
    addUnitToTraining("ChefElfe", castleB);
});
