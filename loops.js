let estudiantes = ["Juan", "Diego", "Maicol"];

function hello(alumno){
    console.log(`hola, ${alumno}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}
//hola, Juan
// hola, Diego
// hola, Maicol

for (const alumno of estudiantes) {
    hello(alumno);
}
//hola, Juan
// hola, Diego
// hola, Maicol

while(estudiantes.length > 0){
    let alumno = estudiantes.shift();
    hello(alumno)
}