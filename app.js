let menu = document.querySelector(".menu-button");
let nav = document.querySelector(".nav-links");
let rotateT = document.querySelector(".menu-button img");
let boxshad = document.querySelector("header");
// let hete = document.querySelector(".lower-right");

menu.addEventListener('click', ()=>{
if(nav.style.scale != "1"){
    nav.style.scale = "1" ;
    // nav.style.minHeight = "100vh" ;
    rotateT.style.rotate = "-180deg"
    boxshad.style.boxShadow = "none"
}
else{
    nav.style.scale = "0" ;
    // nav.style.minHeight = "0vh" ;
    rotateT.style.rotate = "0deg"
    boxshad.style.boxShadow = "rgba(150, 138, 0, 0.1) 0px 10px 15px -3px, rgba(150, 138, 0, 0.05) 0px 4px 6px -2px"
}
});
