
let parejas = {
    "Edugles": "Ylan",
    "Arnis": "Yugdali",
    "Reynaldo": "Yraidy",
    "Grecia": "Virginia",
    "Clorinda": "Marx",

    "Ylan": "Grecia",
    "Marx": "Edugles",
    "Yraidy": "Clorinda",
    "Virginia": "Reynaldo",
    "Yugdali": "Arnis",

};

let nombreUsuario = prompt("Hola, por favor ingresa tu nombre");
let pareja = parejas[nombreUsuario];

let numero = prompt ("Ingresa un número")

if (pareja) {
    alert(  nombreUsuario + ", le vas a regalar a " + pareja + ". No olvides escribirle una linda nota que resalte sus cualidades ¡Feliz Navidad!");
} 
else {
    alert("Vuelve a cargar la página y escribe tu nombre correctamente, por favor.");
};
