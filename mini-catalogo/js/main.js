

fetch("components/header.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  });

fetch("components/footer.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  });




const productos = [
  {
    nombre: "Plan Básico",
    precio: "$80.000/mes",
    descripcion: "Acceso a sala de pesas y cardio de lunes a viernes."
  },
  {
    nombre: "Plan Pro",
    precio: "$130.000/mes",
    descripcion: "Acceso ilimitado + 2 clases grupales por semana incluidas."
  },
  {
    nombre: "Clases de Boxeo",
    precio: "$50.000/mes",
    descripcion: "4 clases al mes con instructor certificado. Todos los niveles."
  },
  {
    nombre: "Yoga y Flexibilidad",
    precio: "$45.000/mes",
    descripcion: "Clases de yoga enfocadas en movilidad, respiración y calma."
  },
  {
    nombre: "Proteína Whey",
    precio: "$95.000",
    descripcion: "Bolsa de 1kg, 24g de proteína por porción. Sabor chocolate."
  },
  {
    nombre: "Guantes de Box",
    precio: "$75.000",
    descripcion: "Guantes profesionales de cuero sintético. Tallas S, M y L."
  }
];




class ProductCard extends HTMLElement {

  connectedCallback() {
    const nombre      = this.getAttribute("nombre");
    const precio      = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <p class="precio">${precio}</p>
    `;
  }
}

customElements.define("product-card", ProductCard);




const catalogo = document.getElementById("catalogo");

for (let i = 0; i < productos.length; i++) {
  const tarjeta = document.createElement("product-card");

  tarjeta.setAttribute("nombre",      productos[i].nombre);
  tarjeta.setAttribute("precio",      productos[i].precio);
  tarjeta.setAttribute("descripcion", productos[i].descripcion);

  catalogo.appendChild(tarjeta);
}
