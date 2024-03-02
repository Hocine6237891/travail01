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
function createTask(description) {
  const taskItem = document.createElement("div");
  taskItem.textContent = description;
  
  // Ajout de boutons pour marquer comme terminé, modifier et supprimer la tâche
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Terminé";
  completeBtn.addEventListener("click", function() {
      taskItem.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";
  editBtn.addEventListener("click", function() {
      const nouveauText = prompt("Modifier la tâche:", taskItem.textContent);
      if (nouveauText !== null) {
          taskItem.textContent = nouveauText;
      }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.addEventListener("click", function() {
      taskItem.remove();
  });

  taskItem.appendChild(completeBtn);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);
}

// Ajout d'une nouvelle tâche lorsque le bouton "Ajouter" est cliqué
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
  }
});

// Marquer une tâche comme terminée en cliquant dessus
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "DIV") {
      event.target.classList.toggle("completed");
  }
});

// Utilisation du stockage local pour sauvegarder les tâches
window.addEventListener("beforeunload", function() {
  const tasks = [];
  taskList.childNodes.forEach(function(taskItem) {
      tasks.push({
          description: taskItem.textContent,
          completed: taskItem.classList.contains("completed")
      });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

// Chargement des tâches sauvegardées depuis le stockage local
window.addEventListener("load", function() {
  const sauvegardeTasks = localStorage.getItem("tasks");
  if (sauvergardeTasks) {
      const tasks = JSON.parse(sauvegardeTasks);
      tasks.forEach(function(task) {
          createTask(task.description);
          if (task.completed) {
              taskList.lastChild.classList.add("completed");
          }
      });
  }
});

// Ajoutez le code pour les autres fonctionnalités (tri, recherche, etc.)
