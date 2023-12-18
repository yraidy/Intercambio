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

if (pareja) {
    alert( nombreUsuario + ", le vas a regalar a " + pareja  );
} else {
    alert("Por favor, escribe tu nombre correctamente.");
};

alert ("Gracias por participar ¡Dios te bendiga!")