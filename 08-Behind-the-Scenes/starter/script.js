'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear

    function printAge(){
        const output = `You are ${age}, born in ${birthYear}`
        console.log(output);
    }
    print()

    return age
}
const firstName = 'Jonas'
calcAge(1991)
