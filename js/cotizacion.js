let cuota = document.querySelector("p#cuota");
let botonContratar = document.querySelector("button#contratar");
let marca = document.querySelector("span#marcaAuto");
let anio = document.querySelector("span#anioAuto");
let gnc = document.querySelector("span#gncAuto");
let cuotaSinDescuento = document.querySelector("p#cuotaSinDescuento");
let servicioContratado = document.querySelector("div#mostrar");

function recuperarLS() {
  const datosDelSeguro = JSON.parse(localStorage.getItem("DatosSeguro"));

  cuota.textContent = datosDelSeguro.cuota - datosDelSeguro.cuota * 0.1;
  cuotaSinDescuento.textContent = datosDelSeguro.cuota;
  marca.textContent = datosDelSeguro.marca;
  anio.textContent = datosDelSeguro.anio;
  gnc.textContent = datosDelSeguro.gnc;
}

botonContratar.addEventListener("click", () => {
  servicioContratado.classList = "mensajeVisible";
  localStorage.clear();
});

recuperarLS();
