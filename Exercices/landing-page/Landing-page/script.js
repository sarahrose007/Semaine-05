[10: 36] Julie Vanderbyse

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


  <
  https: //teams.microsoft.com/l/message/19:f53cd58085c14475ab3f9111fb531f23@thread.tacv2/1595234182074?tenantId=2933c53a-92a2-4dd4-8807-1ad266d35da5&amp;groupId=d94e8fff-ffc5-4ea6-9ace-1082c40f24a2&amp;parentMessageId=1595234182074&amp;teamName=SiriusSchool Formation&amp;channelName=Javascript&amp;createdTime=1595234182074>