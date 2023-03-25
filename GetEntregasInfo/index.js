const axios = require("axios");

module.exports = async function (context, req) {
    context.log("Consumiendo API externa con Azure Function...");
    context.res = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    }
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