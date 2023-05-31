let carro ={
    marca: "Ferrari",
    modelo: "F12 Berlinetta",
    annio: 2013,
    detalleDelCarro: function(){
        console.log(`Carro ${this.modelo} ${this.annio}`);//this hace referencia al objeto osea carro
    }
};

carro.marca
carro.annio
carro.detalleDelCarro()

function auto(marca, modelo ,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let carroNew = new auto ("Porsche", "Taycan", "2020")
let carroNew2 = new auto("Porsche", "718", "2017")

let autos =[];
let cantidadAutos = 0;
let cantIndicados = 0;

function auto(marca, modelo ,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

cantidadAutos = prompt("Cuantos autos quieres ingresar?")

while( cantIndicados < cantidadAutos){
     let marca = prompt("Marca: ");
     let modelo = prompt("modelo: ");
     let annio = prompt("Annio: ");

     let autoNuevo = new auto(marca, modelo, annio);

     autos.unshift(autoNuevo)

     cantIndicados++
}




