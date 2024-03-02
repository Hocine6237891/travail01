function save(){
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;

    
    alert(nom + ", " + prenom)
    localStorage.setItem("nom", nom);
    localStorage.setItem("prénom", prenom);

    window.location.replace(acceuil.html);
}




const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll");
const searchInput = document.getElementById("div1");
const sortSelect = document.getElementById("sortSelect");



var task = "undone task ";
var done = "task done ";
var i = 0;
var j = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    

}
 
 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function addTask() {
    
    
    const taskText = taskInput.value.trim();

    if (taskText !==""){

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";
   
    
    

    const doneBtn = document.createElement("img");

    doneBtn.setAttribute("src", "./Images/icons8-checkmark-50.png");
    doneBtn.setAttribute('height', '18px');
    doneBtn.setAttribute('width', '18px');

    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
        listItem.id = "taskDone"});

    const editBtn = document.createElement("img");

    editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
    editBtn.setAttribute('height', '18px');
    editBtn.setAttribute('width', '18px');

    listItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
    
          // Récupérer le texte de la tâche
          const taskText = listItem.textContent.trim();
          // remplir le input de texte avec le texte de la tâche
          taskInput.value = taskText;
        listItem.remove()
    });

    const deleteBtn = document.createElement("img");

    deleteBtn.setAttribute("src", "./Images/icons8-delete-60.png");
    deleteBtn.setAttribute('height', '18px');
    deleteBtn.setAttribute('width', '18px');

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un

    //noeud existant en tant que dernier enfant d'un noeud parent particulier.

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {

    listItem.remove();

    });


    }else{
        alert("Veuillez entrer une tâche valide.");
    }
localStorage.setItem(task.concat(i), (taskText), i++)
clearAll.addEventListener("click", () => {
    localStorage.clear()
})

sortSelect.addEventListener("change", () => {
    const taskList = document.getElementById("taskList");
    const sortBy = sortSelect.value;
    if (sortBy === "alphabetical") {
        // Trier les tâches par ordre alphabétique
        Array.from(taskList.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(task => taskList.appendChild(task));
    } else if (sortBy === "creationDate") {
        Array.from(taskList.children).sort((a, b) => a.id - b.id);
    
        // Trier les tâches par date de création 
        
    }
});

// Gestion des événements pour les liens des groupes de tâches dans la barre latérale
document.getElementById("div1").addEventListener("click", () => {
    addTaskToGroup("Groupe de tâches 1");
});

document.getElementById("div2").addEventListener("click", () => {
    addTaskToGroup("Groupe de tâches 2");
});

document.getElementById("div3").addEventListener("click", () => {
    addTaskToGroup("Groupe de tâches 3");
});

// Fonction pour ajouter une tâche à un groupe spécifique
function addTaskToGroup(groupName) {
    const taskText = prompt("Entrez la description de la tâche :");
    if (taskText) {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
       
    }
}


}