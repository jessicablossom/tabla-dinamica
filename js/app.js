var app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        id: 1,
        nombre: "Manzana",
        precio: "$12",
        stock: true,
      },
      {
        id: 2,
        nombre: "Naranja",
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
    inputId: "",
    inputNombre: "",
    inputPrecio: "",
    inputStock: false,
  },
  methods: {
    itemStock() {
      this.items.stock = !this.items.stock;
    },
    addItem() {
      const newItem = {
        id: this.inputId,
        nombre: this.inputNombre,
        precio: this.inputPrecio,
        stock: this.inputStock,
      };
      this.items.push(newItem);
    },
  },
});
