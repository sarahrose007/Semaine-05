fetch("https://quotes-light-api.herokuapp.com/api/comments/", {
    method: "GET"
  })
  //je vais chercher les informations dans mon API
  .then(res => {
    return res.json()
  })
  // Je transforme la réponse en format JSON pour l'interprêter grâce au navigateur
  .then(res => {
    let data = res;
    //je stock ma réponse pour la mettre dans un tableau
    data.forEach(element => {
      //je tourne sur mon tableau avec forEach pour accéder à chaque objet
      let divAuteur = document.createElement('div');
      let divComment = document.createElement('div');
      let auteurContent = document.createTextNode(element.auteur);
      let commentContent = document.createTextNode(element.comment);
      //je crée le contenu en div et en texte
      divAuteur.appendChild(auteurContent);
      divComment.appendChild(commentContent);
      // je greffe ce contenu
      let currentDiv = document.getElementById("point-de-repere");
      document.body.insertBefore(divAuteur, currentDiv.nextElementSibling);
      document.body.insertBefore(divComment, currentDiv.nextElementSibling);
      //je spécifie à quel endroit de mon HTML je veux insérer ce contenu
    });
  })