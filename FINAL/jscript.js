const menuopen = document.querySelector('#menuopener');
const side = document.querySelector(".side");
const sidemargin = document.querySelector(".sidemargin");
menuopen.addEventListener('click', ()=>{
    if(!side.classList.contains("sidebaropen") && !side.classList.contains("sidebarclose")){
        side.classList.add("sidebaropen");
    }
    else{
        side.classList.toggle("sidebaropen");
        side.classList.toggle("sidebarclose");
    }
    if(side.classList.contains("sidebaropen")){
        sidemargin.classList.remove("contentsideclose");
        sidemargin.classList.add("contentsideopen");
        document.getElementById("smallicon").src = "assets/cross.png";
    }
    else if(side.classList.contains("sidebarclose")){
        sidemargin.classList.remove("contentsideopen");
        sidemargin.classList.add("contentsideclose");
        document.getElementById("smallicon").src = "assets/Hamburger_icon.png";
    }
})

const content = document.getElementById("content");

const homepage = document.getElementById("homecontainer");
const gamepage = document.getElementById("gamecontainer");
const socialpage = document.getElementById("socialcontainer");

const home = document.getElementById("home");
const social = document.getElementById("social");
const game = document.getElementById("game");

home.addEventListener("click", ()=>{
    homepage.style.display = "block";
    socialpage.style.display = "none";
    gamepage.style.display = "none";
})
game.addEventListener("click", ()=>{
    homepage.style.display = "none";
    socialpage.style.display = "none";
    gamepage.style.display = "inline-block";
})
social.addEventListener("click", ()=>{
    homepage.style.display = "none";
    socialpage.style.display = "grid";
    gamepage.style.display = "none";
})

// game start here

const gamebox = document.getElementsByTagName("canvas")[0];
gamebox.width = window.innerWidth;
gamebox.height = (gamebox.width/4) * 2.1;
const c = gamebox.getContext("2d");

c.fillStyle = "blue";
c.fillRect(gamebox.width/2, 20, 40, 40);