function traerDatos() {
  const url = "../data/data.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("cartas", JSON.stringify(data));
      llenarTabla(data);
    })
    .catch((err) => console.log(err));
}

function llenarTabla(datos = JSON.parse(localStorage.getItem('cartas'))) {
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = "";

  for (let carta in datos) {
    const tr = document.createElement("tr");

    const tdNumero = document.createElement("td");
    tdNumero.textContent = datos[carta].numero;
    tr.appendChild(tdNumero);

    const tdCarta = document.createElement("td");
    tdCarta.textContent = datos[carta].carta;
    tr.appendChild(tdCarta);

    const tdCantidad = document.createElement("td");
    tdCantidad.textContent = datos[carta].cantidad;
    tr.appendChild(tdCantidad);

    tabla.appendChild(tr);
  }
}

function aumentarCantidad(numero) {
  let cartas = JSON.parse(localStorage.getItem('cartas'))
  for(let i=0; i < cartas.length; i++) {
    if(cartas[i].numero == numero){
      cartas[i].cantidad ++;
      break;
    }
  }

  localStorage.setItem("cartas", JSON.stringify(cartas));
  llenarTabla()

}

function anadirCarta(numero, nombre) {
  let cartas = JSON.parse(localStorage.getItem("cartas"));
  let carta = { numero: numero, carta: nombre, cantidad: 0 };
  cartas.push(carta);
  localStorage.setItem("cartas", JSON.stringify(cartas));
  llenarTabla(cartas);
}



function ordenarCartas(){
  let cartas = JSON.parse(localStorage.getItem("cartas"));
  
  localStorage.setItem("cartas", JSON.stringify(cartas));

  cartas.sort((a, b) => b.cantidad - a.cantidad)
  
  llenarTabla(cartas)

}

const carta1 = document.getElementById("1");
const carta2 = document.getElementById("2");
const carta3 = document.getElementById("3");
const carta4 = document.getElementById("4");
const carta5 = document.getElementById("5");
const carta6 = document.getElementById("6");
const carta7 = document.getElementById("7");
const carta8 = document.getElementById("8");
const carta9 = document.getElementById("9");
const carta10 = document.getElementById("10");
const carta11 = document.getElementById("11");
const carta12 = document.getElementById("12");
const carta13 = document.getElementById("13");
const guardar = document.getElementById("guardar");
const ordenar = document.getElementById('ordenar');

guardar.addEventListener("click", function (e) {
  
  e.preventDefault();
  const numero = document.getElementById("numero").value;
  const carta = document.getElementById("carta").value;
  anadirCarta(numero, carta);
  document.getElementById("numero").value = ""
  document.getElementById("carta").value = ""

});

carta1.addEventListener("click", function () {
  aumentarCantidad(1);
});
carta2.addEventListener("click", function () {
  aumentarCantidad(2);
});
carta3.addEventListener("click", function () {
  aumentarCantidad(3);
});
carta4.addEventListener("click", function () {
  aumentarCantidad(4);
});
carta5.addEventListener("click", function () {
  aumentarCantidad(5);
});
carta6.addEventListener("click", function () {
  aumentarCantidad(6);
});
carta7.addEventListener("click", function () {
  aumentarCantidad(7);
});
carta8.addEventListener("click", function () {
  aumentarCantidad(8);
});
carta9.addEventListener("click", function () {
  aumentarCantidad(9);
});
carta10.addEventListener("click", function () {
  aumentarCantidad(10);
});
carta11.addEventListener("click", function () {
  aumentarCantidad(11);
});
carta12.addEventListener("click", function () {
  aumentarCantidad(12);
});
carta13.addEventListener("click", function () {
  aumentarCantidad(13);
});

ordenar.addEventListener("click", function(){
  ordenarCartas()
})

if(!localStorage.getItem("nombreUsuario")){
  window.location.href = 'index.html'
}

traerDatos();
