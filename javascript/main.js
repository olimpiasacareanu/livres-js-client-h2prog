let livre1 = {
   nom : "Notre Dame de Paris",
   auteur : "Victor Hugo",
   pages : 360
}
let livre2 = {
   nom : "Le mythe de Sisyphe",
   auteur : "Albert Camus",
   pages : 50
}
let livre3 = {
   nom : "La Cantatrice chauve",
   auteur : "Eugène Ionesco",
   pages : 160
}
let livre4 = {
   nom : "Notre Dame de Paris",
   auteur : "Victor Hugo",
   pages : 360
}

let tabLivres = [livre1, livre2, livre3, livre4]

let table = document.querySelector('#p_Tableau tbody')
afficherLivres(tabLivres)

// Afficher les livres
function afficherLivres(tab){
   let livre = ""
   for(let i =0; i<tab.length; i++){
       livre += `<tr>
               <th>${tab[i].nom}</th>
               <td>${tabLivres[i].auteur}</td>
               <td>${tab[i].pages}</td>
               <td><i class="fa-solid fa-pen-to-square" onClick="afficherModifierLivre('${i}')"></i></td>
               <td><i class="fa-solid fa-trash" onClick="supprimerLivre('${i}')"></i></td>
            </tr>`
   }
   table.innerHTML = livre
}

// Display form pour ajout livre
let formAjoutLivre = document.querySelector('#divAjoutLivre')
let afficherFormBtn = document.querySelector('.afficherForm')
afficherFormBtn.addEventListener('click', function(e){
   e.preventDefault()
   formAjoutLivre.removeAttribute('class')
   document.querySelector("#divModifLivre").className = "d-none"

})

// Recuperer les donnees et ajout dans le tableau
let validationBtn = document.querySelector('#validationFormAjout')
validationBtn.addEventListener('click', recupererDonnees)

function recupererDonnees(e){
   validationBtn.textContent = "Ajouter"

      e.preventDefault()

      let titre = document.querySelector("#titre").value 
      let auteur = document.querySelector("#auteur").value 
      let pages = document.querySelector("#pages").value 
      ajoutLivre(titre, auteur, pages)
      formAjoutLivre.reset()
      formAjoutLivre.className = "d-none"

}
   
// Creation et ajout de l'objet livre dans le tableau
function ajoutLivre(titre, auteur, pages){
   let livre = {
      nom : titre,
      auteur : auteur,
      pages : pages
   }

   tabLivres.push(livre)
   afficherLivres(tabLivres)

}


function supprimerLivre(indexLivre){
   if(confirm("Voulez- vous vraiment supprimer ?")){
      tabLivres.splice(indexLivre, 1)   
      afficherLivres(tabLivres)
      alert("suppression effectuée")
   }else{
      alert("suppression annulée")
   }
}

let formModifLivre = document.querySelector("#divModifLivre")
function afficherModifierLivre(indexLivre){
   document.querySelector("#divAjoutLivre").className = "d-none"
   formModifLivre.removeAttribute('class')
   let titre = document.querySelector("#divModifLivre #titre")
   let auteur = document.querySelector("#divModifLivre #auteur")
   let pages = document.querySelector("#divModifLivre #pages")
   let identifiant = document.querySelector("#identifiant")
   titre.value = tabLivres[indexLivre].nom
   auteur.value = tabLivres[indexLivre].auteur
   pages.value = tabLivres[indexLivre].pages
   identifiant.value = indexLivre

}

document.querySelector("#validationFormModif").addEventListener("click", function(e){
   e.preventDefault() 
   let titre = document.querySelector("#divModifLivre #titre").value
   let auteur = document.querySelector("#divModifLivre #auteur").value
   let pages = document.querySelector("#divModifLivre #pages").value
   let identifiant = document.querySelector("#identifiant").value

   tabLivres[identifiant].nom = titre
   tabLivres[identifiant].auteur = auteur
   tabLivres[identifiant].pages = pages
   afficherLivres(tabLivres)
   formModifLivre.reset()
   formModifLivre.className = "d-none"
   
})

