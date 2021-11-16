var app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        id: 1,
        nombre: "fruta",
        precio: "$12",
        stock: true,
      },
      {
        id: 2,
        nombre: "verdura",
        precio: "$10",
        stock: false,
      },
      {
        id: 3,
        nombre: "Agua",
        precio: "$10",
        stock: true,
      },
    ],
  },
});
