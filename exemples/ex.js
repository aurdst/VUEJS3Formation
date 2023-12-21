let array = [1,2,3,4,5,6,7,8];

let arrayCopy = [10, ...array, 10 ];

console.log(arrayCopy);
console.log(array);

let [a,b,c] = arrayCopy;

console.log(a);
console.log(c);

let obj = {
    message: 'value',
}

obj.key = "NewValue";

let objCopy = {...obj, 
    newKey: "AgainNewValue"
}

console.log(objCopy);
console.log(obj);

// Nous permet de copié le contenus d'un tableau sans la référence
// Si nous console.logon les différent contenu d'un tableau ils ne sont pas écrasé ni remplacé.

function testVar() {
    var x = 5;
    if(x) {
        var x = 3;
        console.log(x);
    }
    console.log(x);
}

function testVar() {
    let x = 5;
    if(x) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

testVar();

const maConst = 9;

// maConst = 5, ne seras pas accepté car c'est une constante

const maFunc = () => {
    console.log('super function');
}

console.log(maConst);

array.map((i) => {
    console.log('element', i)
});

// Paramaetre implicite

const funct1 = (param) => param + 1

console.log(funct1(20));

// Avec les accolade je dois utiliser le mot clé return 

const funct2 = (param) => {
    return param + 1;
}

// Ceci ne fonctionnera pas
// const funct2 = (param) => {
//    param + 1;
// }

console.log(funct2(20));

// Une promesse est une fonction qui renvoie une promesse
// Quand on a fini on resolve 
const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout( resolve, ms)
    })
}

const syncroneFunc = () => {
    console.log('start');
    console.log(sleep());
    console.log('end');
}

const asyncroneFunc = async () => {
    console.log('start');
    console.log(await sleep(3000))
    console.log('end');
}

// syncroneFunc();

// asyncroneFunc();

const asyncFunc2 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();

            if (rand > 0.5){
                resolve(rand);
            } else {
                reject(rand);
                }
            })
        })
    }

asyncFunc2()

//  Chaining operateur 

const objTestUser = {
    user: {
        name: 'Aurélien',
        lastname: null
    }
}

console.log(objTestUser.user.name)
// Permet d'eviter une erreur d'undefined properties avec l'operateur ?
console.log(objTestUser.user?.lastname?.test)

let string = "a" + "b" // "ab"

let strA = "A"
let strB = "B"

let string2 = `${strA}-${strB}`
