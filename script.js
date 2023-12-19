let parejas = {
    "Edugles": "Ylan",
    "Arnis": "Marx",
    "Reynaldo": "Yraidy",
    "Grecia": "Virginia",
    "Clorinda": "Yugdali",

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
    alert( nombreUsuario + ", le vas a regalar a " + pareja  );
} else {
    alert("Vuelve a cargar la página y escribe tu nombre correctamente, por favor.");
};

