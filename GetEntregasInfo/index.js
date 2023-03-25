const axios = require("axios");
const cors = require('cors');

module.exports = async function (context, req) {
    // Configuración de CORS
    await cors(context.req, context.res);

    context.log("Consumiendo API externa con Azure Function...");
    try {
        const origins = req.query.origins;
        const destinations = req.query.destinations;
        const API_KEY = "AIzaSyAEXeXklXIIQ1L8RdL2i4YKFC5hNF2b9R4";
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${origins}&mode=driving&key=${API_KEY}`

        const response = await axios.get(url);

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