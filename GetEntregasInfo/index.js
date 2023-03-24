module.exports = async function (context, req) {
  context.log("Función GetTostadas activada.");

  // Lista de marcas de tostadas
  const tostadas = [
    { id: 1, marca: "Tosty" },
    { id: 2, marca: "Bimbo" },
    { id: 3, marca: "Holsum234" },
  ];

  // Devuelve la lista de marcas de tostadas en la respuesta
  context.res = {
    status: 200,
    body: tostadas,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
