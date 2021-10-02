
const t = [2,0,2,0,2,3];
const u= [];

function unique(tab) {
    const newTab=[];
    newTab.push(tab[0]);
    let verif_newTab= false;
    for (let i=1; i<tab.length; i++){
        verif_newTab=false;
        for (let y=0; y<newTab.length; y++){
            if (newTab[y]==tab[i]){
                verif_newTab=true
            }
        }
        if(verif_newTab==false){
            newTab.push(tab[i]);
        }
    }
    return newTab;
}


console.log(`${unique(t)}`);

const dim = 10;
const v =  Array.from({length: dim}, (v, k) => Math.ceil(Math.random(k)*dim));
let w = [...new Set(v)];
console.log(`tableau généré aléatoirement ${v}`);
console.log(`ma fonction ${unique(v)}`);
console.log(`vérification: ${w}`);