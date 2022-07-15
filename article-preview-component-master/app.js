const btn = document.querySelector(".info-button")
const links = document.querySelector(".share-links")

const showLinks = () => {
    if (links.classList.contains("show")){
        links.classList.remove("show")
    }else{
        links.classList.add("show")
    }
}

btn.addEventListener("click",showLinks)