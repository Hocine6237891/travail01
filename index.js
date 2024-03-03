////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo (){

  // Todo
  document.location='accueil.html';
}



// ////////////////// Obtenez le modal d'inscription ///////////////////////
// var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// ///////////////// Obtenez le modal de connexion //////////////////////////
// var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }

// Fonction pour créer une nouvelle tâche
// Fonction pour créer une nouvelle tâche
function sauvegarderInscription() {
  // Récupérer les valeurs des champs du formulaire
  var email = document.getElementsByName('email')[0].value;
  var password = document.getElementsByName('psw')[0].value;
  var passwordRepeat = document.getElementsByName('psw-repeat')[0].value;

  // Vérifier si les mots de passe correspondent
  if (password !== passwordRepeat) {
      alert("Les mots de passe ne correspondent pas !");
      return;
  }

  // Créer un objet contenant les données du formulaire
  var formData = {
      email: email,
      password: password
  };

  // Convertir l'objet en chaîne JSON
  var formDataJSON = JSON.stringify(formData);

  // Enregistrer les données dans le local storage avec une clé unique
  localStorage.setItem('inscriptionData', formDataJSON);

  // Afficher un message de succès ou rediriger l'utilisateur vers une autre page
  alert("Inscription réussie !");
}

// Fonction appelée lors de la soumission du formulaire de connexion
function sauvegarderConnexion() {
  // Récupérer les valeurs des champs du formulaire
  var username = document.getElementsByName('uname')[0].value;
  var password = document.getElementsByName('psw')[0].value;

  // Créer un objet contenant les données du formulaire
  var formData = {
      username: username,
      password: password
  };

  // Convertir l'objet en chaîne JSON
  var formDataJSON = JSON.stringify(formData);

  // Enregistrer les données dans le local storage avec une clé unique
  localStorage.setItem('connexionData', formDataJSON);

  // Afficher un message ou rediriger l utilisateur vers une autre page
  alert("Connexion réussi ");
}

  }
});

// Ajoutez le code pour les autres fonctionnalités (tri, recherche, etc.)
