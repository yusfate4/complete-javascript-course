// function solveLinEquation(a,b,c){
//     // let x = 1
//     // let y =3
//     // return (a * x) + (b * y) + c
//     return (a * x ** 2) + (b * x) + c


// }
// console.log(solveLinEquation(1, 4, 4));
let root1 , root2

let a = 1
let b = 0
let c = -4
let descriminant = b * b - 4 * a * c

if (descriminant > 0) {
    root1 = (-b + Math.sqrt(descriminant)) / (2 *a)
    root2 = (-b - Math.sqrt(descriminant)) / (2 *a)
    console.log(root1, root2);

}
else if (descriminant == 0){
    console.log(root1, root2);
} else {
    let realPart = (-b / (2 * a)).toFixed(2)
    let imagPart = (Math.sqrt(-descriminant) / (2 * a)).toFixed(2)
    console.log(realPart, imagPart);
}