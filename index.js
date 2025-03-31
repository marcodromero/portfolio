fetch("./projects.json").then((response)=>{
  response.json().then(arrayProjects=>{
    arrayProjects.forEach(project => {
       const projects = document.getElementById("projects__container");
       const projectElement = document.createElement("div");
       projectElement.className = "project";
       const imageContainer = document.createElement("div");
       imageContainer.className = "project__image-container";
       const image = document.createElement("img");
       image.className = "project__image";
       image.src = project.image;
       imageContainer.appendChild(image);
       const title = document.createElement("h2");
       title.className = "project__title";
       const titleText = document.createTextNode(project.title);
       title.appendChild(titleText);
       const tagsContainer = document.createElement("h2");
       tagsContainer.className = "project__tags-container";
       project.tags.forEach((tag)=>{
       const tagElement = document.createElement("span")
       tagElement.className = `tag ${tag.className}`;
       const tagText = document.createTextNode(`${tag.name}`);
       tagElement.appendChild(tagText);
       tagsContainer.appendChild(tagElement);
       })
       const depscription= document.createElement("p");
       depscription.className = "project__description";
       const depscriptionText = document.createTextNode(project.description);
       depscription.appendChild(depscriptionText);

       const links = document.createElement("section");
       links.className = "links";

       if(project.live){
        const demoLink = document.createElement("a");
        demoLink.href = project.live;
        const demoLinkText = document.createTextNode("🕹️ Demo");
        demoLink.appendChild(demoLinkText);
        links.appendChild(demoLink);
       }
       
       if(project.documentation){
        const docuLink = document.createElement("a");
        docuLink.href = project.documentation;
        const docuLinkText = document.createTextNode("📄 Documentación");
        docuLink.appendChild(docuLinkText);
        links.appendChild(docuLink);
       }
       

       if(project.repositories.server){
        const repoServerLink = document.createElement("a");
        repoServerLink.href = project.repositories.server;
        const repoServerLinkText = document.createTextNode("💾 Repos. Servidor");
        repoServerLink.appendChild(repoServerLinkText);
        links.appendChild(repoServerLink);
       }
      
       if(project.repositories.client){
         const repoClientLink = document.createElement("a");
         repoClientLink.href = project.repositories.client;
         const repoClientLinkText = document.createTextNode("💾 Repos. Cliente");
         repoClientLink.appendChild(repoClientLinkText);
         links.appendChild(repoClientLink);
       }       

       if(project.repositories.full){
         const repoFullLink = document.createElement("a");
         repoFullLink.href = project.repositories.full;
         const repoFullLinkText = document.createTextNode("💾 Repositorio");
         repoFullLink.appendChild(repoFullLinkText);
         links.appendChild(repoFullLink);
       }
            
       projectElement.appendChild(imageContainer);
       projectElement.appendChild(title);
       projectElement.appendChild(tagsContainer);
       projectElement.appendChild(depscription);
       projectElement.appendChild(links);

       

       projects.appendChild(projectElement);

       projectElement.addEventListener("click", (e)=>{
        const parent = e.target.closest(".project");
        if(parent){
          if(parent.children[4].style.display === "none" || parent.children[4].style.display === ""){
            parent.children[4].style.display= "flex"; 
          }else{
            parent.children[4].style.display= "none";
          }
        }
        }) 
    });
  });
})