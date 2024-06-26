let count = 0; // Initialize count to 0


function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display message
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }
function resetCount() {
    count = 0;

    displayCount();
    alert("Followers count has been reset.")
}

/* L'ordre des opérations dans le code, Voici ce qui se passe étape par étape :

* 1- La fonction increaseCount() est appelée.
* 2- La variable count est incrémentée de 1.
* 3- La fonction displayCount() est appelée pour mettre à jour l'affichage de count dans l'élément HTML. Cependant, bien que cette fonction soit appelée avant checkCountValue(), le navigateur n'a pas encore eu l'occasion de rafraîchir l'affichage de la page. Les modifications apportées au DOM (Document Object Model) par des scripts ne sont pas immédiatement visibles ; elles sont généralement visibles après que le code JavaScript en cours d'exécution ait terminé, permettant au navigateur de rafraîchir l'affichage.
* 4- La fonction checkCountValue() est appelée. Si count est égal à 10, une alerte est affichée. Les alertes dans les navigateurs sont modales, ce qui signifie qu'elles bloquent l'exécution du code JavaScript supplémentaire et suspendent le rafraîchissement de l'affichage de la page jusqu'à ce que l'utilisateur ait fermé l'alerte.
* Une fois l'alerte fermée, le navigateur peut continuer à exécuter le reste du code JavaScript (s'il y en a) et rafraîchir l'affichage de la page. C'est à ce moment que l'élément HTML avec l'ID countDisplay est mis à jour avec la valeur de count.
*/