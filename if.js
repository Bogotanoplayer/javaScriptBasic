let piedra = 1;
let papel = 2;
let tijera = 3;

const tu = prompt('PIEDRA PAPEL O TIJERA Elige un # del 1 al 3')
const pc = Math.floor(Math.random()*(3-1+1) +1)

function play(tu,pc){
    if((tu===3 && pc===2)||(tu===2 && pc===1)||(tu===1 && pc ==3)){
        alert('Ganaste')
    } else if(tu===pc){
        alert('Draw')
    }else{
        alert('noob')
    }
}
play(tu, pc);