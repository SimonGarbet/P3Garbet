const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();
const reponse_2 = await fetch('http://localhost:5678/api/categories');
const categories = await reponse_2.json(); 



console.log(window.localStorage.getItem("clef"))
console.log(works);
console.log(categories);




function genererFiltres(works){


        const presentationFiltre = document.querySelector(".filtres")

        const filtreTous = document.createElement('button')
        filtreTous.innerText = "Tous"
        filtreTous.id = "Bouton_Tous"
        filtreTous.dataset.numero = '0'
        
        presentationFiltre.appendChild(filtreTous)

        
        console.log(filtreTous)


        
        let comparatif = []
       
       
    
        for (const work of works){

            if (comparatif.includes(work.categoryId) === false) {

           

            const filtreElement = document.createElement('button')
            filtreElement.innerText = work.category.name
            

            filtreElement.id = `Bouton_${work.categoryId}`
            filtreElement.dataset.numero = work.categoryId
            
            
            console.log(filtreElement)
            
            presentationFiltre.appendChild(filtreElement)

            comparatif.push(work.categoryId)
            }
        }
}





function genererImages(works){

    for (const work of works){

    const presentationVignette = document.querySelector(".gallery");

    const vignetteElement = document.createElement ("figure");

    const imageElement = document.createElement("img");
    imageElement.src = work.imageUrl;

    const nomElement = document.createElement("figcaption");
    nomElement.innerText = work.title;

    presentationVignette.appendChild(vignetteElement);
    vignetteElement.appendChild(imageElement);
    vignetteElement.appendChild(nomElement);

    }}


genererImages(works);








function activeFiltre(bouton){

    if (bouton.dataset.numero == 0){

        bouton.addEventListener("click", function() {
            document.querySelector(".gallery").innerHTML = "";
            genererImages(works)
          });


    } else {

    bouton.addEventListener("click",function(){
    const imagesFiltrees = works.filter(function(work){
        return work.category.id == bouton.dataset.numero
    })
    document.querySelector(".gallery").innerHTML = "";
    genererImages(imagesFiltrees)
    })
}
}




function switchAdmin () {

    if ( window.localStorage.getItem("clef") === '1'){
    
        login_logout.innerText = "logout"
        header_edition.style.display = "flex";
        bouton_modif_pp.style.display = "block";
        bouton_modif_description.style.display = "block";
        bouton_modif_projet.style.display = "block";
        
    } else {
    
        login_logout.innerText = "login"
        header_edition.style.display = "none";
        bouton_modif_pp.style.display = "none";
        bouton_modif_description.style.display = "none";
        bouton_modif_projet.style.display = "none";
    
        genererFiltres(works);
        activeFiltre(Bouton_Tous)
        activeFiltre(Bouton_1)
        activeFiltre(Bouton_2)
        activeFiltre(Bouton_3)
    }
    
    }
    
    
     switchAdmin()















        






















