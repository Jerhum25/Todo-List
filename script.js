console.log("Connecté !");

const tache = document.getElementById('tache');
// console.log(tache);
const ajoutTache = document.getElementById('ajout-tache');
// console.log(ajoutTache);
const containerNouvelleTache = document.querySelector('.container-nouvelle-tache');
// console.log(containerNouvelleTache);

ajoutTache.addEventListener('click', function (e) {
    // console.log('Bouton ajout cliqué !');
    containerNouvelleTache.innerHTML += `
        <div class="nouvelle-tache">
            <p>${tache.value}</p>
            <button class="btn btn-archive"><i class="fa-solid fa-check"></i></button>
            <button class="btn btn-delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `
    archiveTache();
    deleteTache();
});


function archiveTache() {
    const btnArchive = document.querySelectorAll('.btn-archive');
    console.log(btnArchive);
    btnArchive.forEach(i => {
        i.addEventListener('click', function () {
            // console.log("Bouton archive cliqué !");
            i.previousElementSibling.classList.toggle('text-through');

        })
    })

}


function deleteTache() {
    const btnDelete = document.querySelectorAll('.btn-delete');
    console.log(btnDelete);
    btnDelete.forEach(i => {
        i.addEventListener('click', function () {
            i.parentElement.remove();
        })
    });
}
