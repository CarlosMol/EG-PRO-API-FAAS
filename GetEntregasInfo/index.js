const axios = require("axios");

module.exports = async function (context, req) {
    context.log("Consumiendo API externa con Azure Function...");

    try {
        const response = await axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?destinations=6.84%2C-75.46&origins=6.83%2C-75.46%20%20&mode=walking&key=AIzaSyAEXeXklXIIQ1L8RdL2i4YKFC5hNF2b9R4");

        context.res = {
            status: 200,
            body: response.data
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error al obtener información de la API externa."
        };
    }
};