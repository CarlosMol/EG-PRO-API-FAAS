const axios = require("axios");
const express = require("azure-function-express").express;
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/getntregasinfo", async (req, res) => {
    try {
        const origins = req.query.origins;
        const destinations = req.query.destinations;
        const API_KEY = "AIzaSyAEXeXklXIIQ1L8RdL2i4YKFC5hNF2b9R4";
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${origins}&mode=driving&key=${API_KEY}`;

        const response = await axios.get(url);

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener información de la API externa." });
    }
});

module.exports = require("azure-function-express").createAzureFunctionHandler(app);
