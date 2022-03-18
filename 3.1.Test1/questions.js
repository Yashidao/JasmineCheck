
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    texte1 = 'Le javascript est ';
    texte2 = 'super';
    return texte1 + texte2;
}
let afficherCar5 = (texte) => {
    return texte[4];
}
let afficher9Car = (texte) => {
    let arr = [];
    for (i = 0; i < 9; i++) {
        arr.push(texte[i]);
    }
    texte = arr.join("");
    return texte
}
let majusculeString = (texte) => {
    texte = "un autre excellent exercice"
    texte = texte.toUpperCase();
    return texte
}
let minusculeString = (texte) => {
    texte = "celui ci aussi!"
    texte = texte.toLowerCase();
    return texte
}
let SupprEspaceString = (texte) => {
    texte = " Rome ne s'est pas construite en un jour ";
    texte = texte.substr(1, texte.length - 2)
    return texte
}
let IsString = (texte) => {
    texte = "je suis une string";
    let bool;
    if (typeof (texte) == "string") {
        bool = true
    }
    return bool
}

let AfficherExtensionString = (texte) => {
    texte = "image.jpg"
    texte = texte.split(".");
    texte = texte.pop();
    return texte
}
let NombreEspaceString = (texte) => {
    texte = "Je suis une maison en bleu"
    let x = 0;
    for (i = 0; i < texte.length; i++) {
        if (texte[i] == " ") {
            x++;
        }
    }
    return x
}
let InverseString = (texte) => { // La phrase est déjà dans texte donc change ça mdr
    let text = "Après demain, à partir d'aujourd'hui?"
    texte = "";
    for (i = text.length - 1; i >= 0; i--) {
        texte += text[i];
    }
    return texte
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(x, y)
}
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray = (array) => {
    for (i = 0; i < array.length; i++) {
        array[i] = Math.abs(array[i]);
    }
    return array
}
let sufaceCercle = (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon, 2))
}
let hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2))
}
let calculIMC = (poids, taille) => {
    let imc = (poids / Math.pow(taille, 2))
    imc = imc.toFixed(2);
    imc = parseFloat(imc)
    return imc
}
