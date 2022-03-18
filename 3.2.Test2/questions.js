let CreationTableauLangages = () => {
    let arr = ["Html", "CSS", "Java", "PHP"]
    return arr
}

let CreationTableauNombres = () => {
    let arr = [0, 1, 2, 3, 4, 5]
    return arr
}

let RemplacementElement = (langages) => {
    langages[2] = "Javascript"
    return langages
}

let AjoutElementLangages = (langages) => {
    langages.push("Ruby", "Python")
    return langages
}

let AjoutElementNombres = (nombres) => {
    nombres.unshift(-2, -1)
    return nombres
}

let SuppressionPremierElement = (langages) => {
    langages.shift()
    return langages
}

let SuppressionDernierElement = (langages) => {
    langages.pop()
    return langages
}

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    let arr = reseaux_sociaux_chaine.split(",")
    return arr
}

let ConversionTableauChaine = (langages) => {
    let string = ""
    string = langages.join(",")
    return string
}

let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort()
}

let InversionTableau = (langages) => {
    let arr = []
    let x = 0;
    for(i=langages.length -1 ; i >=0; i--){
        arr[x] = langages[i]
        x++;
    }
    
    return arr
}
