let vehiculos = [
  { marca: "Volkswagen", interes: 1.3 },
  { marca: "Peugeot", interes: 1.4 },
  { marca: "Ford", interes: 1.3, id: 3 },
  { marca: "Mercedes Benz", interes: 1.9 },
  { marca: "Toyota", interes: 1.5},
  { marca: "Fiat", interes: 1.3 },
];

//Enlace de DOM

const inputAnio = document.querySelector("input#anio");
const selectMarca = document.querySelector("select#marca");
const botonCalcular = document.querySelector("button.cotizar");
const boxGnc = document.querySelector("input#opc1");

function cargarVehiculos() {
  if (vehiculos.length > 0) {
    vehiculos.forEach((nombre) => {
      selectMarca.innerHTML += `<option>${nombre.marca}</option>`;
    });
  }
}

function retornarInteres(marca) {
  let vehiculo = vehiculos.find((elemento) => elemento.marca === marca);

  return vehiculo.interes;
}

function cotizar() {
  let anio = parseInt(inputAnio.value);
  let gnc = boxGnc.checked;
  let interes = retornarInteres(selectMarca.value);

  //establecer monto del GNC
  const interesGnc = gnc === true ? 1200 : 0;

  //instanciar objeto Seguro
  const seguro = new Seguro(interes, anio, interesGnc);

  let cuota = seguro.calcularPrecioSeguro();

  //guardar en Local Storage
  guardarDatos(anio, selectMarca.value, boxGnc.value, cuota);

  //redireccionar a la otra pagina

  location.href = "cotizacion.html";
}

function guardarDatos(anio, marca, gnc, cuota) {
  let datosSeguro = {
    anio: anio,
    marca: marca,
    gnc: gnc,
    cuota: cuota,
  };

  localStorage.setItem("DatosSeguro", JSON.stringify(datosSeguro));
}

cargarVehiculos();

//EVENTO
botonCalcular.addEventListener("click", () => cotizar());
