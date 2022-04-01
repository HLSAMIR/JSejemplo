//alert("Hola mundo");

//console.log("Esto es genial......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

var nombre= "OMAR SAMIR";
let edad = 10;
//edad= "No quiero decirlo";
let titulo = document.getElementById('titulo');

let mensaje = "Mi nombre es "+ nombre+ "y mi edad es "+ (edad + 12);

console.log(mensaje);

titulo.innerHTML = mensaje;
titulo.style.color= "#FFBD4A";
titulo.style.textTransform='uppercase';

titulo.onclick = function () {
        titulo.innerHTML="Le diste clic";
        titulo.style.textTransform= 'LowerCase';
        titulo.innerHTML="<img src=https://cdn.discordapp.com/attachments/949425711314247762/959451647346630706/200w.gif>";
        
};